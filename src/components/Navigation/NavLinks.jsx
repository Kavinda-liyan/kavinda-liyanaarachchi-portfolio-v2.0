import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavLinks = (props) => {
  return (
    <>
    <li className=' flex-col mx-6'>
                   
                    <p className='py-1 font-ubuntu tracking-widest'>{props.content}</p>
                </li>
    </>
  )
}

export default NavLinks