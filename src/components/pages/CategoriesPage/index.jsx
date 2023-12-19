import React from 'react'
import Main from '../../Main'

import CategoriesList from '../../CategoriesList'
import Container from '../../UI/Container'
import Title from '../../UI/Title'

export default function CategoriesPage() {
  return (
    <>
      <Main/>
      <Container>
      <Title>Catalog</Title>
      <CategoriesList />
      </Container>
    </>
  )
}
