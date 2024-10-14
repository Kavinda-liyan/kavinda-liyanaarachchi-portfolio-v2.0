import React, { useState } from 'react'
import ProjectCards from './ProjectCards'
import projectRecords from '../../data/projectRecords.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Element } from 'react-scroll';

const ITEMS_PER_PAGE = 4;

const Projects = () => {
   

  const [currentPage, setCurrentPage] = useState(1);


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedProjects = projectRecords.slice(startIndex, endIndex);


  const totalPages = Math.ceil(projectRecords.length / ITEMS_PER_PAGE);


  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Element name='projectsSection'>

   
    <section className=' w-full h-full'>
      <div className='text-center justify-center flex-col  px-10 max-md:p-2'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-auto'>
            <h1 className='text-slate-600 font-ubuntu text-5xl py-5'>Projects</h1>
            <div className='h-full w-full p-5 grid grid-cols-4  overflow-hidden max-md:p-2 max-md:grid-cols-2'>
              {paginatedProjects.map((project, index) => (
                <ProjectCards
                  key={index}
                  cover={project.cover}
                  title={project.title}
                  category={project.category}
                  links={project.links}
                />
              ))}
              
            </div>
            <div className='flex justify-center items-center mt-5'>
              <button 
                className='bg-red-500 hover:bg-red-400 text-white  py-2 px-4 rounded cursor-pointer' 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faArrowLeft}/>
              </button>
              <span className='text-red-600 m-2'>
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400'  
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <FontAwesomeIcon icon={faArrowRight}/>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </Element>
  )
}

export default Projects
