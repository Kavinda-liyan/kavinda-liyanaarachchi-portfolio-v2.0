import Powericons from "./Powericons";
import reacticon from '../../../../assets/Images/icons/react.png'
import emailicon from '../../../../assets/Images/icons/emailjs.png'
import tailwindicon from '../../../../assets/Images/icons/tailwind.png'
import vercelicon from '../../../../assets/Images/icons/vercel.png'

const Poweredby =()=>{
    return(<>
    <div className='flex flex-col text-center max-md:border-b-1 max-md:py-1'>
    <h1 className="font-ubuntu text-xs font-semibold text-slate-600">Developed Using</h1>
    <div className=" h-full flex flex-col justify-center pt-5">
    <div className="flex flex-nowrap justify-center mx-5 px-5 ">
    <Powericons image={reacticon} power={"ReactJs"} animation={'duration-1000 ease-linear '}/>
    <Powericons image={emailicon} power={"EmailJs"}/>
    <Powericons image={tailwindicon} power={"TailwindCSS"}/>
    <Powericons image={vercelicon} power={"Vercel"}/>

      

</div>
<p className="font-ubuntu font-semibold text-xs text-slate-500 py-5  ">Visit my <a className="text-cyan-800 underline " href="https://github.com/Kavinda-liyan" target="_blank">GitHub profile</a> to see my other projects.</p>
    </div>

</div>
    </>);
}

export default Poweredby