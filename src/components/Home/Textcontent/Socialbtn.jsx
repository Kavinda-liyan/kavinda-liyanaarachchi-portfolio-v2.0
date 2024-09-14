import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socialbtn = (props) => {
  return (
    <>
    <a className={`flex justify-center items-center scale-75 m-1 ${props.iconcolor} font-bold border-2 ${props.bordercolor} ${props.background}
     hover:border-teal-600 rounded-md p-0 w-10 h-10 max-sm:w-8 max-sm:h-8  text-2xl max-md:text-sm hover:shadow-sm
      hover:shadow-teal-600 hover:text-teal-600 hover:rotate-6 transition  duration-500 text-slate-400`}><FontAwesomeIcon icon={props.socialIcon}/></a>
                        
    </>
  )
}

export default Socialbtn