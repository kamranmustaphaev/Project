import React from 'react'
import Filter from '../../Filter'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Title from '../../UI/Title'
import ProductsList from '../../ProuctsList'
import Container from '../../UI/Container'





export default function CategoryPage() {
  const {id} = useParams()
  
  const categories = useSelector(({categories}) => categories.list)
  const category = categories.find(el => el.id === +id)
  const productsCategory = useSelector(({products}) => products.list).filter(el => el.categoryId === +id)
  
  
  return (
    <Container>
      <Title>{category === undefined ? '' : category.title}</Title>
      <Filter/>
      <ProductsList products={productsCategory}/>
    </Container>
  )
}
