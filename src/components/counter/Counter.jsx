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
    <div className='w-38 h-38 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-sm shadow-slate-500   transition  duration-200 cursor-pointer ' data-aos="zoom-in"
    data-aos-duration="500" data-aos-easing="linear">
      <ScrollTrigger onEnter={()=> setCountOn(true)} onExit={()=>setCountOn(false)}>
      <div className='text-center p-5 text-slate-600  hover:text-slate-40 flex  flex-col '>
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