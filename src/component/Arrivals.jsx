import Container from './layer/Container'
import React from 'react'
import TitleHeader from './layer/TitleHeader'
import ProductItem from './layer/ProductItem'

const Arrivals = () => {
  return (
      <Container className="mt-32">
        <TitleHeader headerText="New Arrivals" />
        <ProductItem/>
      </Container>
  )
}

export default Arrivals