import React from 'react';
import skillrecord from '../../../data/skillRecord.json';
import Tooltip from '../../../Tooltip/Tooltip';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos';

const Skill = () => {
   useEffect(()=>{
    Aos.init();
},[])
  return (
    <section className='w-auto h-full '>
      <div className='text-center justify-center flex-col'>
        <div className='w-auto h-full flex flex-col items-center justify-center'>
          <div className='w-auto'>
            <h1 className='text-red-400  font-ubuntu text-3xl py-5 max-md:text-lg'>Skills</h1>
            <div className='h-full w-full p-10 bg-slate-100  rounded-md grid grid-cols-3 gap-5  overflow-hidden max-md:p-2  max-md:grid-cols-1'>
              {skillrecord.map((skill, index) => (
                <div key={index} className='p-5 rounded-md bg-gradient-to-br from-slate-200 to-slate-300  shadow-sm shadow-slate-500 max-md:p-2 ' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
                  <h1 className='text-left text-red-600 m-2 p-1'>{skill.category}</h1>
                  <hr className='border-red-400' />

                  <div className='flex flex-wrap m-2 p-1'>
                    {skill.icons.map((icon, idx) => (
                      <Tooltip key={idx} message={icon.tooltip}> {/* Display icon name in tooltip */}
                        <div
                          className='group h-14 w-14 max-md:w-10 max-md:h-10 border-1 border-red-400 rounded-md  m-2 shadow-sm shadow-red-300 
                          hover:border-red-300 hover:shadow-md 
                          hover:bg-red-400 cursor-pointer perspective-1000 hover:rotate-15 transition-transform duration-300 z-0 '
                        >
                          <img src={icon.icon} alt={icon.name} className='p-2 w-full group-hover:-rotate-15' />
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
