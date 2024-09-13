import React from 'react'
import { NavLink } from 'react-router-dom'

const TabLinks = (props) => {
  return (
    <><li className='p-2 text-teal-600 hover:text-teal-200 border-b-2 border-teal-600  font-ubuntu w-screen hover:border-teal-200 cursor-pointer hover:bg-slate-800 rounded-tl-md rounded-tr-md 
     hover:shadow-md hover:shadow-teal-600 transition  duration-500'>
       <NavLink 
        to={props.to} 
        className={({ isActive }) => 
          isActive ? 'text-teal-100 border-teal-200 shadow-md shadow-teal-600 ' : 'text-teal-600' 
        }
      >
        <div>
        {props.subject}
        </div>
        
      </NavLink>
     </li></>
  )
}

export default TabLinks