import React from 'react'
import Container from '../UI/Container'
import ProductsList from '../ProuctsList'
import { useSelector } from 'react-redux'

export default function Stock() {
  
  const saleProducts = useSelector(({products}) =>
   products.list).filter(el => el.discont_price !== null).slice(0, 4)
  
  return (
    <Container>
       <ProductsList products={saleProducts}/>
    </Container>
  )
}
