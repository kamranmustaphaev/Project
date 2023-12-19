import React from 'react'
import Main from '../../Main'
import Discount from '../../Discount'
import Stock from '../../Stock'
import CategoriesContainer from '../../CategoriesContainer'


export default function HomePage() {
  return (
    <>
      <Main/>
      <CategoriesContainer />
      <Discount/>
      <Stock/>
    </>
  )
}
