import { Element } from "react-scroll";
import ConatctForm from "./contactmeform";
import Social from "./Social";



const Contact = ()=>{

    return(
        <>
        <Element name="contactSection">

        
    <section className=' w-full h-full '>
      <div className='text-center justify-center flex-col  p-5'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-full'>
            <h1 className='text-slate-600 font-ubuntu text-5xl py-5'>Contact</h1>
                <div className=" grid grid-cols-2 w-auto bg-white shadow-md rounded overflow-hidden max-md:grid-cols-1">
                    <Social/>
                  <ConatctForm/>

                </div>
            </div>
        </div>
        </div>
    </section>
    </Element>
        </>
    );

}
export default Contact