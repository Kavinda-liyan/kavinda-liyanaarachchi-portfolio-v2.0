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
                <div className='bg-gradient-to-br from-slate-200 to-slate-300 rounded-md shadow-sm shadow-slate-500  ' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500" >
                    <div className=''>
                      <div className='m-2  p-5 relative '>
                        <div className={`w-3 h-3 ${props.Color1} absolute right-0 top-0 rounded-full ` }>
                          <div className={`w-3 h-3 ${props.Color2} absolute right-0 top-0 rounded-full animate-ping`}></div>
                        </div>
                        <h1 className='text-red-600 text-2xl max-md:text-lg'>{props.designation}</h1>
                        <h1 className='text-red-500 text-lg max-md:text-base'>{props.company}<span className='px-5 text-sm text-slate-600'>{props.year}</span></h1>
                        <p className=' text-slate-600 max-md:text-xs'>{props.description}</p>
                      </div>
                      
                      
                      </div>
                    
                  </div>
    </>
  )
}

export default Jobcard