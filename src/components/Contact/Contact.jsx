import ConatctForm from "./contactmeform";
import Social from "./Social";



const Contact = ()=>{

    return(
        <>
    <section className='mt-10 w-full h-full float-right'>
      <div className='text-center justify-center flex-col  p-5'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-full'>
            <h1 className='text-slate-600 font-ubuntu text-5xl py-5'>Contact</h1>
                <div className=" grid grid-cols-2 w-auto bg-white shadow-md rounded overflow-hidden">
                    <Social/>
                  <ConatctForm/>

                </div>
            </div>
        </div>
        </div>
    </section>
        </>
    );

}
export default Contact