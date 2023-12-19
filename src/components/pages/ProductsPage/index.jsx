import React from 'react'
import Filter from '../../Filter'
import ProductsList from '../../ProuctsList'
import Title from '../../UI/Title'
import { useSelector } from 'react-redux';
import Container from '../../UI/Container';

export default function ProductsPage() {
  const products = useSelector(({products}) => products.list);
 
  return (
    <Container>
      <Title>All products</Title>
      <Filter/>
      <ProductsList products={products}/>
    </Container>
  )
}
