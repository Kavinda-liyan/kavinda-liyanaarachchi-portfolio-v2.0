import React from 'react'
import { Outlet } from 'react-router-dom'
import Tabnavigation from '../Tabnavigation/Tabnavigation'
import TabLinks from '../Tabnavigation/TabLinks'
import Experience from './Experience/Experience'

const AboutMain = () => {
   
  return (
    <div className=' flex items-center justify-center'>
      
    
        <div className=' px-10 bg-slate-100   h-auto w-full max-md:p-2'>
        <h1 class="text-slate-600 font-ubuntu text-5xl py-5 text-center">About</h1>
            
            {/* <Experience/> */}
            <div className='h-auto max-md:h-full'>
      <div className='mt-0'>
        <div className=' max-md:m-2'>
          <ul className=' max-md:m-2 max-md:p-2 flex text-center justify-center gap-0 font-ubuntu text-slate-100 text-2xl max-md:text-lg'>
            {/* Passing the "to" prop for routing */}
            <TabLinks subject={"Experience"} to="/experience" />
            <TabLinks subject={"Education"} to="/education" />
            <TabLinks subject={"Soft Skills"} to="/soft-skills" />
            <TabLinks subject={"Skills"} to="/skills"/>
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