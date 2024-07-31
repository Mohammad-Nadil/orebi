import React from 'react'
import { Link } from 'react-router-dom'

const DDli = ({className , href , liText , children}) => {
  return (
      <li  className={`font-DM text-sm text-[#767676]  hover:bold hover:text-[#262626] cursor-pointer ${className} `}>
      <Link className="block"  to={href} >{liText}</Link>
      {children}
    </li>
  )
}

export default DDli
