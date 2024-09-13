import React, { useEffect } from 'react'
import Textcontent from './Textcontent/Textcontent'
import Imgcontent from './Imgcontent/Imgcontent'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
      Aos.init();
  },[])
  return (
    <section className=' w-full h-dvh float-right mt-16' > 
      <div className='grid xl:grid-cols-2 md:grid-cols-1 gap-10 h-dvh  overflow-y-hidden'>
        <div className='2xl:h-dvh lg:h-full' data-aos="fade-left" data-aos-duration="800" data-aos-easing="linear"><Textcontent/></div>
        <div className='2xl:h-dvh lg:h-full overflow-hidden' data-aos="fade-right"  data-aos-duration="800" data-aos-easing="linear"><Imgcontent/></div>
      </div>
     
      
    </section>
  )
}

export default Home