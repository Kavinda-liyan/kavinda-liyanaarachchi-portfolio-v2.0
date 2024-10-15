import React, { useEffect } from 'react'
import Textcontent from './Textcontent/Textcontent'
import Imgcontent from './Imgcontent/Imgcontent'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Element } from 'react-scroll'


const Home = () => {
  useEffect(()=>{
      Aos.init();
  },[])
  return (
    <Element name='homeSection'>
    <section className=' w-full h-full mt-16' > 
      <div className='grid xl:grid-cols-2 md:grid-cols-1 gap-10 h-full  overflow-y-hidden max-sm:gap-0 '>
       
        <div className='2xl:h-dvh lg:h-full overflow-hidden' data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="linear"><Imgcontent/></div>
        <div className='2xl:h-dvh lg:h-full ' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"><Textcontent/></div>
      </div>
     
      
    </section>
    </Element>
    
  )
}

export default Home