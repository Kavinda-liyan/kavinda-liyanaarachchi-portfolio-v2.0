import React from 'react';
import skillrecord from '../../data/skillRecord.json';
import Tooltip from '../../Tooltip/Tooltip';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos';

const Skill = () => {
   useEffect(()=>{
    Aos.init();
},[])
  return (
    <section className='mt-10 w-full h-full float-right'>
      <div className='text-center justify-center flex-col m-10 p-10'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-3/4'>
            <h1 className='text-teal-600 font-ubuntu text-5xl py-5'>Skills</h1>
            <div className='h-full w-full p-5 bg-slate-800 shadow-lg rounded-md grid grid-cols-3 gap-5 overflow-hidden'>
              {skillrecord.map((skill, index) => (
                <div key={index} className='p-5 rounded-sm' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
                  <h1 className='text-left text-teal-100 m-2 p-1'>{skill.category}</h1>
                  <hr className='border-teal-700' />

                  <div className='flex flex-wrap m-2 p-1'>
                    {skill.icons.map((icon, idx) => (
                      <Tooltip key={idx} message={icon.tooltip}> {/* Display icon name in tooltip */}
                        <div
                          className='h-14 w-14 border-1 border-teal-700 rounded-md bg-slate-800 m-2 
                          hover:border-teal-300 hover:shadow-md 
                          hover:bg-slate-700 cursor-pointer perspective-1000 hover:rotate-15 transition-transform duration-300 z-0 hover:animate-pulse'
                        >
                          <img src={icon.icon} alt={icon.name} className='p-2 w-full' />
                        </div>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
