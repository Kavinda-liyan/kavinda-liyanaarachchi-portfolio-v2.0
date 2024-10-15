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
    <div className='w-38 h-38 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-sm shadow-slate-500   transition  duration-200 cursor-pointer ' data-aos="fade-down"
    data-aos-duration="800" data-aos-easing="linear" data-aos-anchor-placement="top-center">
      <ScrollTrigger onEnter={()=> setCountOn(true)} onExit={()=>setCountOn(false)}>
      <div className='text-center p-5 text-slate-600  hover:text-slate-40 flex  flex-col max-md:p-2 '>
        <h1 className='text-4xl flex text-center justify-center p-2 max-md:text-2xl'>
          {counterOn && <CountUp start={props.start} end={props.end} duration={2} delay={0}/>}
          <span className='text-3xl font-bold max-md:text-xl'>+</span>
            </h1>
            
            <p className='text-xl max-md:text-base'>{props.type}</p>
        <p className='text-xs p-1 font-bold max-md:text-xxs max-md:font-semibold'>{props.discription}</p>
      </div>
      </ScrollTrigger>
      
    </div>
    </>
  )
}

export default Counter