import React from 'react'
import Banner from './Banner'
import Image from '../layer/Image'
import policy1 from '/introDown.png'
import SaleOffer from '../SaleOffer'
import Arrivals from '../Arrivals'
import BestSellers from '../BestSellers'
import SpecialOffers from '../SpecialOffers'
import Add_2 from '../Add_2'
import Intro2 from '../Intro2'

const Home = () => {
  return (
    <>
      <Banner/>
      <Intro2/>
      <SaleOffer/>
      <Arrivals/>
      <BestSellers/>
      <Add_2/>
      <SpecialOffers/>
    </>
  )
}

export default Home
