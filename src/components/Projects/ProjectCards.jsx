import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCards = (props) => {
  return (
    <>
    <div className='Cardcontainer p-5  group rounded-md overflow-hidden font-nunito cursor-pointer'>
                        <div className='Card shadow-xl  rounded-tl-md rounded-tr-md bg-slate-600 group-hover:bg-slate-400 transition duration-500 relative'> 
                            <div className='w-full h-full overflow-hidden '>
                            <img className='group-hover:scale-105 transition duration-500 object-cover ' src={props.cover}></img>
                            
                            </div>
                            
                            <div className='p-2'>
                                <h1 className='text-left text-slate-300 m-2 p-2 text-xl border-l-1 group-hover:text-slate-800
                                 group-hover:border-slate-800 transition duration-300 font-bold'>{props.title}</h1>
                                 <div className='flex justify-end text-slate-800'>
                                 <p className='rounded-md shadow-md m-2 p-1 w-max h-max bg-gradient-to-br
                                  from-yellow-300 to-yellow-600 text-xs text-right float-end font-bold'>{props.category}</p>
                                 <a className='rounded-md shadow-md m-2 p-1 w-6 h-6
                                   text-md text-right float-end font-bold flex items-center bg-gradient-to-br from-yellow-300 to-yellow-600
                                    hover:scale-125 hover:shadow-xl transition duration-300' href={props.links} rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={props.icon}/></a>
                                 </div>
                                 
                            </div>
                        
                        </div>
    </div>
    </>
  )
}

export default ProjectCards