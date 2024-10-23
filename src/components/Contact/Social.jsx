import { faFacebook, faGithub, faInstagram, faLinkedin, faPinterest, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socialbtn from "./Socialbtn";
import { faX } from "@fortawesome/free-solid-svg-icons";


const Social = ()=>{
    return(
        <>
        <div className="bg-slate-300 flex justify-center"> 
           
                        <div className="flex items-center justify-center ">
                           
                           <Socialbtn link="https://www.linkedin.com/in/kavinda-liyanaarachchi-729b14262/" socialIcon={faLinkedin}/>
                           <Socialbtn link="https://github.com/Kavinda-liyan" socialIcon={faGithub}/>
                           <Socialbtn link="https://wa.me/94774421707" socialIcon={faWhatsapp}/>
                           <Socialbtn link="https://x.com/cham_kaviz" socialIcon={faXTwitter} />
                           <Socialbtn link="https://www.facebook.com/kavinda.chamara.14" socialIcon={faFacebook} />
                           <Socialbtn link="https://www.instagram.com/cham_kaviz/" socialIcon={faInstagram} />
                           <Socialbtn link="https://www.pinterest.com/KavindaLiya/" socialIcon={faPinterest} />
                        </div>
                    </div>
        </>
    );
}

export default Social