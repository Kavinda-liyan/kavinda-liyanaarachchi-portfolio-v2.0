import React from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const TabLinks = ({ to, subject }) => {

  useEffect(()=>{
    Aos.init();
},[])

  return (
    <li className=" w-screen font-ubuntu cursor-pointer transition duration-300 rounded-tl-md rounded-tr-md" data-aos="fade-in"
    data-aos-easing="linear"
    data-aos-duration="1000">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block p-2  text-center rounded-t-md transition-all duration-300 
          ${isActive ? 'text-slate-50 border-red-200 shadow-md shadow-slate-100 bg-red-400' : 'text-red-600 hover:text-slate-100'}
          hover:bg-red-400 hover:border-red-200 hover:shadow-md hover:shadow-slate-200 max-md:text-base`
        }
      >
        {subject}
      </NavLink>
    </li>
  );
};

export default TabLinks;
