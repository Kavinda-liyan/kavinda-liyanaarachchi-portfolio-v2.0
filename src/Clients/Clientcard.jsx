import React from 'react'


const Clientcard = (props) => {
  return (
    <>
    
    <div className='w-36 h-36 rounded-lg bg-gradient-to-bl to-slate-800 from-slate-900  overflow-hidden shadow-md group cursor-pointer'>
    <img className='filter grayscale  contrast-200 group-hover:filter-none transition duration-500' src={props.clientimg} alt={props.clientimg}></img>
   

  </div>
   
    </>
  )
}

export default Clientcard