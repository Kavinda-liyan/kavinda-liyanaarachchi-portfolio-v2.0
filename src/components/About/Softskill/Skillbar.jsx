import React from 'react'

const Skillbar = (props) => {
  return (
    <>
    <div className='flex mx-2  px-5 flex-col hover:animate-pulse cursor-pointer'>
                <div className=' text-white py-2'><p className=''>{props.skill}</p></div>
                <div className='h-2 rounded-lg bg-slate-100 overflow-hidden shadow-md '>
                      <div className={`h-2 ${props.progress} rounded-lg bg-teal-600 skill-bar `}  style={{ '--skill-width': props.present }} >
                      
                      </div> 
                </div>
                
                 </div>
    </>
  )
}

export default Skillbar