import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const SectionLayoutWrapper =({children,Title})=>{

  useEffect(()=>{
    Aos.init();
},[])

    return(
        <>

<section className=' w-full h-full'>
      <div className='text-center justify-center flex-col  px-10 max-md:p-2'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-full p-5'>
            <h1 className='text-slate-600 font-ubuntu text-5xl py-5' data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="1000">{Title}</h1>
            {children}
          </div>
        </div>
      </div>
</section>
        
        
        </>
    )

}
export default SectionLayoutWrapper