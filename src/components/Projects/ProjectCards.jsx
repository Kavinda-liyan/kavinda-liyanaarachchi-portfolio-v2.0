import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos';

const iconMap = {
  faGithub: faGithub,
  faGlobe: faGlobe,
};

const ProjectCards = ({ cover, title, category, links }) => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <div className='Cardcontainer m-5 p-2 group  overflow-hidden font-nunito cursor-pointer max-md:m-0' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="500">
      <div className='Card rounded-md overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 shadow-sm shadow-slate-500 hover:bg-slate-400  transition duration-500 relative'>
        <div className='w-full h-full overflow-hidden'>
          <img 
            className='group-hover:scale-125 transition duration-500 object-cover' 
            src={cover} 
            alt={title}
          />
        </div>
        <div className='p-2'>
          <h1 className='text-left text-slate-600 m-2 p-2 text-lg max-md:text-xs max-md:h-14 max-md:p-0 max-md:m-0 h-24  group-hover:text-slate-800 group-hover:border-slate-800 transition duration-300 font-bold'>
            {title}
          </h1>
          <div className='flex justify-end text-slate-800'>
            <p className='rounded-md shadow-md m-2 p-2 w-max h-max bg-gradient-to-br from-red-400 to-red-500 text-xs max-md:text-xxs max-md:m-1 max-md:p-1 text-right float-end font-bold'>
              {category}
            </p>
            {links.map((linkObj, index) => (
              <a 
                key={index}
                className='rounded-md shadow-md m-2 p-2 max-md:m-1 max-md:p-1 max-md:text-xxs  text-md text-right float-end font-bold flex items-center bg-gradient-to-br from-red-400 to-red-500 hover:scale-125 hover:shadow-xl transition duration-300' 
                href={linkObj.link} 
                rel="noopener noreferrer" 
                target='_blank'
              >
                <FontAwesomeIcon icon={iconMap[linkObj.icon]} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
