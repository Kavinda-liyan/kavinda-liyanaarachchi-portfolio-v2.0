import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Jobcard = ( props) => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <>
                <div className='bg-slate-600 rounded-md shadow-md ' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500" >
                    <div className=''>
                      <div className='m-2 border-l-2 p-5 relative '>
                        <div className={`w-3 h-3 ${props.Color1} absolute right-0 top-0 rounded-full ` }>
                          <div className={`w-3 h-3 ${props.Color2} absolute right-0 top-0 rounded-full animate-ping`}></div>
                        </div>
                        <h1 className='text-teal-400 text-2xl'>{props.designation}</h1>
                        <h1 className='text-teal-400 text-lg'>{props.company}<span className='px-5 text-sm text-red-400'>{props.year}</span></h1>
                        <p className=' text-slate-300'>{props.description}</p>
                      </div>
                      
                      
                      </div>
                    
                  </div>
    </>
  )
}

export default Jobcard