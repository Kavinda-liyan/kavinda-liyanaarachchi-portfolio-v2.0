import React from 'react'

const Skillbar = (props) => {
  return (
    <>
    <div className='flex m-2  px-5 flex-col hover:animate-pulse cursor-pointer'>
                <div className=' text-slate-600 py-2'><p className=''>{props.skill}</p></div>
                <div className='h-2 rounded-lg bg-slate-100 overflow-hidden shadow-md border-1 border-slate-200 '>
                      <div className={`h-2 ${props.progress} rounded-lg bg-red-400 skill-bar  `}  style={{ '--skill-width': props.present }} >
                      
                      </div> 
                </div>
                
                 </div>
    </>
  )
}

export default Skillbar