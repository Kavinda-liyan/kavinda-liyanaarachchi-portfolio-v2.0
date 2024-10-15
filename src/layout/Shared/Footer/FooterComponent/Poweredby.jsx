import Powericons from "./Powericons";
import reacticon from '../../../../../public/icons/react.png'
import emailicon from '../../../../../public/icons/emailjs.png'
import tailwindicon from '../../../../../public/icons/tailwind.png'
import vercelicon from '../../../../../public/icons/vercel.png'
import FooterWrapper from "../FooterWrapper";

const Poweredby =()=>{
    return(<>
 <FooterWrapper Title={"Developed by"}>

        <div className="flex flex-col pt-5">
            <div className="flex flex-nowrap justify-center mx-5 px-5 ">
                    <Powericons image={reacticon} power={"ReactJs"} animation={'duration-1000 ease-linear '}/>
                    <Powericons image={emailicon} power={"EmailJs"}/>
                    <Powericons image={tailwindicon} power={"TailwindCSS"}/>
                    <Powericons image={vercelicon} power={"Vercel"}/>
            </div>
            <p className="font-ubuntu font-semibold text-xs text-slate-500 py-5  ">Visit my <a className="text-cyan-800 underline " href="https://github.com/Kavinda-liyan" target="_blank">GitHub profile</a> to see my other projects.</p>
        </div>

</FooterWrapper>
    </>);
}

export default Poweredby