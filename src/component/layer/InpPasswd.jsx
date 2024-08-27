import React, { useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'



const InpPasswd = ({id, label, placeholder, className ,children , inputValue , onChange}) => {

    let [show , setShow] = useState(false)

  return (
    <div className={` flex flex-col relative w-[31.6875rem] border-b border-[#D8D8D8] ${className} `}>
        <label className='font-DM font-bold leading-6 text-primary' htmlFor={id}>{label}</label>
        <input onChange={onChange} value={inputValue} type={show ? "text":"password"} placeholder={placeholder} id={id}/>
        <IoEye  onClick={()=>setShow(false)} className={`absolute right-0 top-1/2  text-xl `} />
        <IoEyeOff  onClick={()=>setShow(true)} className={`absolute right-0 top-1/2  text-xl ${show ? "hidden" : "flex"}`} />
          {children}
    </div>
  )
}

export default InpPasswd
