import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Socialbtn = (props) => {
  return (
    <>
    <li>
    <a className={`flex justify-center items-center scale-75 m-1  font-bold border-2 border-red-500 
     hover:border-red-600 rounded-full p-0 w-24 h-24 max-sm:w-8 max-sm:h-8  text-6xl max-md:text-sm hover:shadow-sm
      hover:shadow-red-100 hover:text-red-600 hover:scale-90 transition  duration-500 text-red-500`} target='_blank' href={props.link}><FontAwesomeIcon icon={props.socialIcon}/></a>
    </li>
   
                        
    </>
  )
}

export default Socialbtn