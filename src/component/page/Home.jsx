import React from 'react'
import Banner from './Banner'
import Image from '../layer/Image'
import policy1 from '/introDown.png'
import SaleOffer from '../SaleOffer'
import Arrivals from '../Arrivals'

const Home = () => {
  return (
    <>
      <Banner/>
      <Image src={policy1} imageClass='mx-auto' />
      <SaleOffer/>
      <Arrivals/>
    </>
  )
}

export default Home
