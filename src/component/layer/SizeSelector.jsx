import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const SizeSelector = () => {

    let [show , setShow] = useState(false)
    let [size , setSize] = useState('S')
    let manage = (element)=> {
        setSize(element.target.value)
    }

  return (
            <li className='flex gap-x-[4.75rem] items-center'>
                <p className='font-DM font-bold leading-6 text-primary'>SIZE:</p>
                <div onClick={()=>setShow(!show)} className="flex items-center gap-x-[4.75rem] py-1 px-5 border border-secondary !relative">
                    <p>{size}</p>
                    <FaCaretDown/>
                    <ul onClick={manage} className={`w-full bottom-0 translate-y-full left-0 z-50 absolute transition-all duration-300 ${show?"visible opacity-100":" invisible opacity-0"}`}>
                        <li><input className='border border-secondary w-full cursor-default text-center' value="S "  /></li>
                        <li><input className='border border-secondary w-full cursor-default text-center' value="M"  /></li>
                        <li><input className='border border-secondary w-full cursor-default text-center' value="L "  /></li>
                        <li><input className='border border-secondary w-full cursor-default text-center' value="XL"  /></li>
                    </ul>
                </div>
            </li>
    
  )
}

export default SizeSelector
