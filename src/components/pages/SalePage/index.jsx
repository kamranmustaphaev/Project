import React from 'react'
import ProductsList from '../../ProuctsList'
import Filter from '../../Filter'
import Title from '../../UI/Title'
import { useSelector } from 'react-redux'
import Container from '../../UI/Container'

export default function SalePage() {
  const productsAllSale = useSelector(({products}) => products.list).filter(el => el.discont_price !== null)
  
  return (
    <Container>
      <Title>Products with sale</Title>
      <Filter/>
      <ProductsList products={productsAllSale}/>
    </Container>
  )
}
