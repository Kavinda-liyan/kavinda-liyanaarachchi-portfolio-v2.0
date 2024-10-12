import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAssistiveListeningSystems, faBars, faHome, faMoon, faProjectDiagram, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
   <nav className='bg-slate-50 h-16 fixed flex w-full z-20' >
    <div className='mx-auto flex items-center  left-0  justify-between navItems w-full bg-slate-100  shadow-sm shadow-slate-300'>
        <div className='flex mx-4'>
        
        <div className='m-2 p-2 bg-red-600 rounded-full'>
            <h2 className='text-neutral-200 text-2xl font-bold'>K.L</h2>
        
        </div>
        <div className='m-1 p-2 flex items-center'>
            
            
            <h2 className='text-red-600 text-xl font-light font-nunito text'>Kavinda Liyanaarachchi</h2>
        </div>
        
        
    </div>
        
        
        <div className=''>
            <ul className='text-center   text-red-700 font-bold text-xs flex max-md:hidden'>
                <NavLinks  content={"HOME"}/>
                <NavLinks  content={"ABOUT ME"}/>
                <NavLinks  content={"PROJECTS"}/>
                <NavLinks  content={"CONTACT"}/>
{/* 
                <li className='flex items-center justify-between mx-2 px-2'>
                    <div className=' px-2 text-xl'>
                        <div>
                            <button className='px-2'><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></button>
                            <button className='px-2'><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></button>
                        </div>

                    </div>
                </li> */}
                
            </ul>
            <div className='p-5 text-slate-100 text-xl hidden max-md:block'>
                <button><FontAwesomeIcon icon={faBars}/></button>
            </div>
        </div>
    </div>

   </nav>
  )
}

export default Navbar