import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socialbtn = (props) => {
  return (
    <>
    <button className={`scale-75 m-0 ${props.iconcolor} font-bold border-2 ${props.bordercolor} ${props.background}
     hover:border-teal-600 rounded-md p-0 w-10 h-10 text-2xl hover:shadow-sm
      hover:shadow-teal-600 hover:text-teal-600 hover:rotate-6 transition  duration-500`}><FontAwesomeIcon icon={props.socialIcon}/></button>
                        
    </>
  )
}

export default Socialbtn