import React from 'react'
import Animationrounds from './animationRounds'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import Typewritertxt from './Typewritertxt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Socialbtn from './Socialbtn';


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
        words:["Front-end Developer (React js)"],
        loop:1,
    })
    const [designation2]=useTypewriter({
        words:["a Graphic designer","a Graphic designer","a Video editor","a Content creator"],
        loop:0,
    })
  return (
    <div className='h-full'>
        <div className='w-full  h-full p-10 max-sm:p-5 flex items-center '>
            <div className=' bg-slate-800 shadow-md shadow-slate-700 rounded-tl-md rounded-tr-md border-2 border-slate-600 h-auto w-full'>
                <div className='w-full bg-gradient-to-r from-slate-800 to-slate-900 h-8 p-2 rounded-tl-md rounded-tr-md flex justify-between border-b-2 border-slate-700 '>
                    <div className='flex gap-2 items-center'>
                        <div className='w-4 h-4 rounded-full  '>
                            <Animationrounds bgcolor1={"bg-red-200"} bgcolor2={"bg-red-600"}/>
                        </div>
                        <div className='w-4 h-4 rounded-full '>
                        <Animationrounds bgcolor1={"bg-yellow-200"} bgcolor2={"bg-yellow-500"}/>
                        </div>
                        <div className='w-4 h-4 rounded-full  '>
                        <Animationrounds bgcolor1={"bg-green-200"} bgcolor2={"bg-green-500"}/>
                        </div>
                    </div>
                    <div>
                        <p className='text-slate-400 font-bold font-mono text-sm'> {text1}<span className='text-yellow-600'>{text}<Cursor/></span>{text2}</p>

                    </div>
                   

                </div>
                <div className='w-full bg-gradient-to-r from-slate-800 to-slate-900 h-auto'>
                    <Typewritertxt interducetxt={'Hi, '} typeName={name} fontsize={'text-4xl max-lg:text-2xl max-sm:text-lg'}/>
                    <Typewritertxt interducetxt={""} typeName={designation} fontsize={'text-xl max-lg:text-lg max-sm:text-base'} />
                    <Typewritertxt interducetxt={""} typeName={designation2} fontsize={'text-xl max-lg:text-lg max-sm:text-base'} />
                    <p className='text-slate-400 mx-6 text-lg max-sm:text-xs'>I’m a passionate front-end developer, graphic designer, video editor, and UI/UX . I create visually striking, user-friendly designs by merging creativity with technical skill. Check out my portfolio to see my work come to life.<Cursor/></p>
                    <div className='text-right flex justify-end'>
                        <Socialbtn socialIcon={faWhatsapp}/>
                        <Socialbtn socialIcon={faFacebook}/>
                        <Socialbtn socialIcon={faGithub}/>
                        <Socialbtn socialIcon={faLinkedin}/>
                        <Socialbtn socialIcon={faInstagram}/>
                        <button className='m-2 h-full text-xs text-slate-500 font-bold border-2 border-slate-500 rounded-md p-2  hover:border-teal-600  hover:shadow-teal-600 hover:text-teal-600'><FontAwesomeIcon icon={faDownload}/> Download CV</button>
                        
                       
                    </div>
                    
                </div>
            </div>
        
        </div>
        
        </div>
  )
}

export default Textcontent