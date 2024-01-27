import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import { useDispatch} from 'react-redux'
import { discountedItems, priceMinMax, sorted } from '../../store/slice/productSlice'
import { useLocation } from 'react-router-dom'


export default function Filter() {
    const dispatch = useDispatch()
    const location = useLocation()
    // const products = useSelector(({products}) => products.list)
    // useEffect(() => {
    //     return () => {
    //         dispatch(defaultState(products))  
    //     }
    // }, [dispatch, location.pathname]);

    const [price, setPrice] = useState({ min: 0, max: Infinity })
    
    useEffect(() => {
        dispatch(priceMinMax(price))
    }, [dispatch, price])

    const discountedHandler = ({ target }) => {
        dispatch(discountedItems(target.checked))
    }

    const handlerPrice = ({ target }) => {
        dispatch(sorted(target.value))
    }

    const minPrice = ({ target }) => {
        setPrice({ ...price, min: +target.value })
    }

    const maxPrice = ({ target }) => {
        setPrice({ ...price, max: +(target.value || Infinity) })
    }

    return (
        <Container >
            <div className={s.filter}>
                <div className={s.price}>
                    <p>Price</p>
                    <input type="number" placeholder='from' onChange={minPrice} />
                    <input type="number" placeholder='to' onChange={maxPrice} />
                </div>
                {
                    location.pathname === '/all_sales' ? '' :
                        <div className={s.discount}>
                            <p>Discounted</p>
                            <p><input type="checkbox" onChange={discountedHandler} /></p>
                        </div>
                }
                <div >
                    <p>Sorted</p>
                    <select name="" id="" className={s.select} onChange={handlerPrice}>
                        <option value="Default">Default</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>
            </div>
        </Container>
    )
}
