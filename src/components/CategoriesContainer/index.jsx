import React from 'react'
import Container from '../UI/Container'
import CategoriesList from '../CategoriesList'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function CategoriesContainer() {
  return (
    <Container >
      <div className={s.categories}>
        <h2>Catalog</h2>
        <Link to={'/categories'}>All categories</Link>
      </div>
      <CategoriesList length={4} />
    </Container>
  )
}
