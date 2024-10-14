import { faLinkedin,faFacebook,faWhatsapp,faGithub,faInstagram } from "@fortawesome/free-brands-svg-icons";
import Socialbtn from "../../../../components/Contact/Socialbtn";


const Portfoliolist =()=>{
   
    return(<>
    <div className='flex flex-col text-center  border-slate-300 max-md:border-r-0 '>
    <h1 className="font-ubuntu text-xs font-semibold text-slate-600">Portfolio</h1>
<div className="flex flex-col justify-center">
    

        
                    <div className=' text-center '> 

                    <ul className="flex flex-row items-center justify-center scale-50">
                           
                           <Socialbtn link="https://www.linkedin.com/in/kavinda-liyanaarachchi-729b14262/" socialIcon={faLinkedin}/>
                           <Socialbtn link="https://github.com/Kavinda-liyan" socialIcon={faGithub}/>
                           <Socialbtn link="https://wa.me/94774421707" socialIcon={faWhatsapp}/>
                           <Socialbtn link="https://www.facebook.com/kavinda.chamara.14" socialIcon={faFacebook} />
                           <Socialbtn link="https://www.instagram.com/cham_kaviz/" socialIcon={faInstagram} />
                        </ul>

                   
                   
                    </div>
                    <p className="font-nunito font-bold text-xs">
                        Designed by : 
                    <a className="text-slate-500 hover:text-slate-800" href="https://www.linkedin.com/in/kavinda-liyanaarachchi-729b14262/"> Kavinda Liyanaarachchi</a>
                    </p>

                    
                    
                    
                    
                
        

       


    </div>
</div>
    </>);
}

export default Portfoliolist