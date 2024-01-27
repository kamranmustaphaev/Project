import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import Button from '../UI/Button'
import BasketItem from '../BasketItem'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useBasket } from '../../hooks/useBasket'


export default function Basket() {
    const basketProducts = useBasket()

    const totalSum = basketProducts.reduce((acc, el) => acc + (el.discont_price ?? el.price) * el.count, 0)
    const totalCount = basketProducts.reduce((acc, el) => acc + el.count, 0)

    const { register, handleSubmit, formState: { errors } } = useForm()
    const submit = data => {
        fetch('http://localhost:3001/order/send',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(console.log(data))
            })
    }
    return (
        <Container className={s.container}>
            {
                basketProducts.length !== 0 ?
                    <>
                        <h2>Shopping </h2>
                        <Button className={s.back_to_store} type={'green'}>
                            <Link to={'/products'}>Back to the store</Link>
                        </Button>
                        <div className={s.basket}>
                            <div >
                                {
                                    basketProducts.map(el => <BasketItem key={el.id} {...el} />)
                                }
                            </div>
                            <form className={s.order} onSubmit={handleSubmit(submit)}>
                                <p>Order details</p>
                                <div className={s.total_sum}>
                                    <p>Total</p>
                                    <p>{totalSum.toFixed(2)}$<span>({totalCount})</span></p>
                                </div>
                                <input type="tel" placeholder='Phone number'
                                    {...register("phoneNumber",
                                        {
                                            required: true,
                                            pattern: { value: /^\+49\d{10}$/, message: "Incorrect phone number" }
                                        }
                                    )} />
                                {errors.phoneNumber && <p className={s.message}>{errors.phoneNumber.message}</p>}
                                <Button type={'green'}>Order</Button>
                            </form>
                        </div>
                    </>
                    :
                    <div className={s.empty}>
                        <p >Your Basket is empty</p>
                        <Button type={'green'}><Link to={'/products'}>Shop now</Link></Button>
                    </div>
            }
        </Container>
    )
}
