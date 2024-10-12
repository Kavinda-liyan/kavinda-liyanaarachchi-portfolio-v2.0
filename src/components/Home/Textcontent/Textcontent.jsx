import React from 'react'
import Animationrounds from './animationRounds'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import Typewritertxt from './Typewritertxt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Textcontent = () => {
    const text1 = "<>";
    const text2="</>"
    
 
    const [text] = useTypewriter({
      words: [ "portfolio", "Home"],
      loop: 0,  
    });

    const [name]=useTypewriter({
        words:["I'm Kavinda Liyanaarchchi"],
        loop:1,
    })
    const [designation]=useTypewriter({
        words:["Undergraduate | Software Engineering Enthusiast"],
        loop:1,
    })
    const [designation2]=useTypewriter({
        words:["a Graphic designer","a Graphic designer","a Video editor","a Content creator"],
        loop:0,
    })
  return (
    <div className='h-full'>
        <div className='w-full  h-full p-5 max-sm:p-5 flex items-center '>
            <div className=' rounded-tl-md rounded-tr-md h-auto w-full'>
               
                <div className='w-full  h-auto'>
                    <Typewritertxt interducetxt={'Hi, '} typeName={name} fontsize={'text-5xl max-lg:text-2xl max-sm:text-lg'}/>
                    <Typewritertxt interducetxt={""} typeName={designation} fontsize={'text-xl max-lg:text-lg max-sm:text-base'} cursor={`<Cursor/>`}/>
                    <Typewritertxt interducetxt={""} typeName={designation2} fontsize={'text-xl max-lg:text-lg max-sm:text-base'}  />
                    <p className='text-red-600 mx-5 text-lg max-sm:text-xs'>I’m a passionate front-end developer, graphic designer, video editor, and UI/UX . I create visually striking, user-friendly designs by merging creativity with technical skill. Check out my portfolio to see my work come to life.</p>
                    <div className='text-left flex justify-start mx-5'>
                     
                        <button className='my-2 h-full text-sm text-slate-50 font-bold border-2 border-red-500 bg-red-500 rounded-md p-2  hover:border-red-400  hover:bg-red-400 hover:text-slate-100'><FontAwesomeIcon icon={faDownload}/> Download CV</button>
                        
                       
                    </div>
                    
                </div>
            </div>
        
        </div>
        
        </div>
  )
}

export default Textcontent