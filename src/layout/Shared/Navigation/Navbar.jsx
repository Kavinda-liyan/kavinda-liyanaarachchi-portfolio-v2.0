import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='bg-slate-50 h-16 fixed flex w-full z-20'>
      <div className='mx-auto flex items-center justify-between navItems w-full bg-slate-100 shadow-sm shadow-slate-300'>
        <div className='flex mx-4'>
          <div className='m-2 p-2 bg-red-600 rounded-full'>
            <h2 className='text-neutral-200 text-2xl font-bold'>K.L</h2>
          </div>
          <div className='m-1 p-2 flex items-center'>
            <h2 className='text-red-600 text-xl font-light font-nunito'>Kavinda Liyanaarachchi</h2>
          </div>
        </div>

        
        <div className=''>
          <ul className='text-center text-red-600 font-bold text-xs flex max-md:hidden'>
            <NavLinks toLink={"homeSection"} content={"HOME"} onClick={closeMenu} />
            <NavLinks toLink={"aboutSection"} content={"ABOUT ME"} onClick={closeMenu} />
            <NavLinks toLink={"projectsSection"} content={"PROJECTS"} onClick={closeMenu} />
            <NavLinks toLink={"contactSection"} content={"CONTACT"} onClick={closeMenu} />
          </ul>

         
          <div className='p-5 text-red-600 text-xl hidden max-md:block'>
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

  
      <div
        className={`max-md:flex flex-col items-center bg-red-500 max-md:bg-gradient-to-bl max-md:from-red-600 max-md:to-red-400 w-full shadow-sm shadow-red-600 z-20 fixed top-0 h-screen transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
       
        <div className='flex justify-end w-full p-4'>
          <button onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} className='text-slate-100 text-2xl' />
          </button>
        </div>

        <ul className='flex flex-col text-center text-slate-100 font-bold text-xs max-md:text-xl justify-center items-center h-full max-md:gap-10'>
          <NavLinks toLink={"homeSection"} content={"HOME"} onClick={closeMenu} />
          <NavLinks toLink={"aboutSection"} content={"ABOUT ME"} onClick={closeMenu} />
          <NavLinks toLink={"projectsSection"} content={"PROJECTS"} onClick={closeMenu} />
          <NavLinks toLink={"contactSection"} content={"CONTACT"} onClick={closeMenu} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
