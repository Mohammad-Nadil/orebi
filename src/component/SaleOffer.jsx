import React from 'react'
import Container from '../component/layer/Container'
import ad1 from '/Ad_1.png'
import ad2 from '/Ad_2.png'
import ad3 from '/Ad_3.png'
import Image from './layer/Image'

const SaleOffer = () => {
  return (
    <Container className='pt-[10.875rem] '>
        <div className="main flex justify-between">
            <div className="left w-[48.75rem] h-[48.75rem] ">
                <Image src={ad1} />
            </div>
            <div className="right flex flex-col justify-between">
                <div className="up w-[48.75rem] h-[23.125rem] ">
                <Image src={ad2} /></div>
                <div className="down w-[48.75rem] h-[23.125rem] ">
                <Image src={ad3} /></div>
            </div>
        </div>
    </Container>
  )
}

export default SaleOffer
