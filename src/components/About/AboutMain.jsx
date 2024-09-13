import React from 'react'
import { Outlet } from 'react-router-dom'

import Experience from './Experience/Experience'

const AboutMain = () => {
   
  return (
    <div className='m-10 flex items-center justify-center'>
        <div className=' p-5 bg-slate-800 shadow-lg rounded-md  h-auto 2xl:w-3/4'>
            {/* <Experience/> */}
            
            <Outlet /> 
                
            </div>
    </div>
    
  )
}

export default AboutMain