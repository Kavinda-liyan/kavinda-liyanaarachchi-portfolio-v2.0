import React from 'react';
import { NavLink } from 'react-router-dom';

const TabLinks = ({ to, subject }) => {
  return (
    <li className=" w-screen font-ubuntu cursor-pointer transition duration-300 rounded-tl-md rounded-tr-md">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block p-2  text-center rounded-t-md transition-all duration-300 
          ${isActive ? 'text-slate-50 border-red-200 shadow-md shadow-slate-100 bg-red-400' : 'text-red-600 hover:text-slate-100'}
          hover:bg-red-400 hover:border-red-200 hover:shadow-md hover:shadow-slate-200`
        }
      >
        {subject}
      </NavLink>
    </li>
  );
};

export default TabLinks;
