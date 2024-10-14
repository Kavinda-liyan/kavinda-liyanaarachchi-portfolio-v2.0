import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'


const NavLinks = (props) => {
  return (
    <>
                <li className=' flex-col mx-6 hover:text-red-800 cursor-pointer'>
                   
                    <Link className='py-1 font-ubuntu tracking-widest font-bold' to={props.toLink} spy={true} smooth={true} offset={-70} duration={500} onClick={props.onClick}>{props.content}</Link>
                </li>
    </>
  )
}

export default NavLinks