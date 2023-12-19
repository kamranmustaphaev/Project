import React from 'react'
import Container from '../UI/Container'
import Button from '../UI/Button'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <Container className={s.container}>
      <div className={s.sale}>
        <h2>Sale</h2>
        <h2>new season</h2>
        <Link to={'/all_sales'}><Button className={s.btn} type={'white'} >Sale</Button></Link>
      </div>
    </Container>
  )
}
