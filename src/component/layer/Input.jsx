import React from 'react'

const Input = ({className, id, placeholder, type, label }) => {
  return (
    <div className={`border-b border-[#D8D8D8] min-w-[320px] lg:w-[31.6875rem] ${className}`}>
      <label className='font-DM font-bold leading-6 text-primary' htmlFor={id}>{label}</label>
      <input className='block w-full font-DM text-sm placeholder:text-secondary text-primary  mt-2.5'  id={id} 
      type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
