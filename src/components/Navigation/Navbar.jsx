import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAssistiveListeningSystems, faBars, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
   <nav className='bg-slate-900 h-16 fixed flex w-full z-20' >
    <div className='mx-auto flex items-center  left-0  justify-between navItems w-full bg-slate-800  shadow-xl'>
        <div className='flex mx-4'>
        
        <div className='m-2 p-2 bg-teal-600 rounded-lg'>
            <h2 className='text-neutral-200 text-2xl font-bold'>K.L</h2>
        
        </div>
        <div className='m-1 p-2 flex items-center'>
            
            
            <h2 className='text-neutral-200 text-xl font-bold font-ubuntu text'>Kavinda Liyanaarachchi</h2>
        </div>
        
        
    </div>
        
        
        <div className=''>
            <ul className='text-center   text-neutral-200 font-semibold text-xs flex max-md:hidden'>
                <NavLinks  content={"HOME"}/>
                <NavLinks  content={"ABOUT ME"}/>
                <NavLinks  content={"SKILL"}/>
                <NavLinks  content={"PROJECTS"}/>
                <NavLinks  content={"CLIENTS"}/>
                <NavLinks  content={"CONTACT"}/>
                
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