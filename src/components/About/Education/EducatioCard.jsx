import React from 'react'
import { Cursor } from 'react-simple-typewriter'


const EducatioCard = (props) => {
  return (
    <>
     <div className=' bg-gradient-to-r from-slate-600 to-slate-700  rounded-md shadow-md  mx-10' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500" >
                    <div className=''>
                      <div className='m-2 border-l-2 p-5 relative '>
                        <div className={`w-auto h-auto bg-yellow-600 absolute right-0 top-0 rounded-sm p-1 m-2 hover:rotate-6 cursor-pointer shadow-md` }>
                          <p className='text-slate-50 font-nunito font-bold text-sm'>{props.eduTitle}</p>
                        </div>
                        <h1 className='text-teal-100 text-3xl font-semibold'>{props.title}</h1>
                        <h1 className='text-teal-200 text-lg py-2'>{props.institute}</h1>
                        <p className=' text-slate-300 py-1'>{props.year}</p>
                        <hr className='border-teal-300 py-2'></hr>

                        <p className=' text-slate-300'>{props.description}</p>
                      </div>
                      
                      
                      </div>
                    
                  </div>
    </>
  )
}

export default EducatioCard