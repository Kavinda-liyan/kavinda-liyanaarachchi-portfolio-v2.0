import React from 'react'
import portfolio from '../../assets/Images/Projects/myportfolio.jpg'
import { Link } from 'react-router-dom'
import Socialbtn from '../Home/Textcontent/Socialbtn'
import { faGlobe, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <section className='mt-10 w-full h-full float-right'>
        <div className='text-center justify-center flex-col m-10 p-10'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div div className='w-3/4'>
                <h1 className='text-teal-600 font-ubuntu text-5xl py-5'>Projects</h1>
                <div className='h-full w-full p-5 bg-slate-800 shadow-lg rounded-md grid grid-cols-3 gap-5 overflow-hidden'>
                    <ProjectCards
                    cover={portfolio}
                    title={"Kavinda Liyanaarchchi Portfolio Website"}
                    category={"Web Development"}
                    links={"https://github.com/Kavinda-liyan/Project_1_2022"}
                    icon={faGithub}
                    />
                    

                </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Projects