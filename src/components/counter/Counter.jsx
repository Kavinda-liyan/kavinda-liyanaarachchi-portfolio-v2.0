import React, { useEffect,useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Counter = (props) => {
const [counterOn,setCountOn]=useState(false);

useEffect(()=>{
  Aos.init();
},[])

  return (
    <>
    <div className='w-38 h-38 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl shadow-md shadow-slate-900 border-2 border-teal-600  transition  duration-200 cursor-pointer hover:animate-pulse' data-aos="zoom-in"
    data-aos-duration="500" data-aos-easing="linear">
      <ScrollTrigger onEnter={()=> setCountOn(true)} onExit={()=>setCountOn(false)}>
      <div className='text-center p-5 text-teal-300  hover:text-teal-50 flex  flex-col '>
        <h1 className='text-4xl flex text-center justify-center p-2 '>
          {counterOn && <CountUp start={props.start} end={props.end} duration={2} delay={0}/>}
          <span className='text-3xl font-bold'>+</span>
            </h1>
            
            <p className='text-xl'>{props.type}</p>
        <p className='text-xs p-1 font-bold'>{props.discription}</p>
      </div>
      </ScrollTrigger>
      
    </div>
    </>
  )
}

export default Counter