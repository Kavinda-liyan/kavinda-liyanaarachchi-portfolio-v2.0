import React from 'react'
import { Outlet } from 'react-router-dom'
import Tabnavigation from '../Tabnavigation/Tabnavigation'
import TabLinks from '../Tabnavigation/TabLinks'
import Experience from './Experience/Experience'

const AboutMain = () => {
   
  return (
    <div className='m-10 flex items-center justify-center'>
      
    
        <div className=' p-5 bg-slate-800 shadow-lg rounded-md  h-auto 2xl:w-3/4'>
            
            {/* <Experience/> */}
            <div className='h-24 max-md:h-full'>
      <div className='mt-0'>
        <div className='m-5 max-md:m-2'>
          <ul className='m-5 p-5 max-md:m-2 max-md:p-2 flex text-center justify-center gap-0 font-ubuntu text-slate-100 text-2xl max-md:text-lg'>
            {/* Passing the "to" prop for routing */}
            <TabLinks subject={"Experience"} to="/experience" />
            <TabLinks subject={"Education"} to="/education" />
            <TabLinks subject={"Soft Skills"} to="/soft-skills" />
          </ul>
        </div>
      </div>
    </div>
            
            <Outlet /> 
                
            </div>
    </div>
    
  )
}

export default AboutMain