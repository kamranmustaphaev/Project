import React from 'react'
import Button from '../UI/Button'
import gnom from './gnom.png'
import Container from '../UI/Container'
import s from './style.module.css'
import { useForm } from 'react-hook-form'

export default function Discount() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submit = data => {
    fetch('http://localhost:3333/sale/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
  }
  return (
    <Container className={s.container}>
      <img src={gnom} alt="" />
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">5% off
          <p>on the first order</p>
        </label>
        <input type="tel" placeholder='+49'
          {...register("phoneNumber",
            {
              required: true,
              pattern: { value: /^\+49\d{10}$/, message: "Incorrect phone number" }
            }
          )} />
        {errors.phoneNumber && <p className={s.message}>{errors.phoneNumber.message}</p>}
        <Button component={'button'} type={'transparent'}>Get a discount</Button>
      </form>
    </Container>


  )
}
