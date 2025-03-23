import React from 'react'

const Input = ({className, id, placeholder, type, label, children , inputValue ,onChange}) => {
  return (
    <div className={`border-b border-[#D8D8D8] min-w-[320px] md:w-[43%] lg:w-[31.6875rem] relative ${className}`}>
      <label className='font-DM font-bold leading-6 text-primary' htmlFor={id}>{label}</label>
      <input onChange={onChange} value={inputValue} className='block w-full font-DM text-sm placeholder:text-secondary text-primary outline-none mt-2.5'  id={id} 
      type={type} placeholder={placeholder} />
        {children}
      
    </div>
  )
}

export default Input
