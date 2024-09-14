import React, { useState } from 'react'
import ProjectCards from './ProjectCards'
import projectRecords from '../../data/projectRecords.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ITEMS_PER_PAGE = 3;

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
    <section className='mt-10 w-full h-full float-right'>
      <div className='text-center justify-center flex-col m-10 p-10'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-3/4'>
            <h1 className='text-teal-600 font-ubuntu text-5xl py-5'>Projects</h1>
            <div className='h-full w-full p-5 bg-slate-800 shadow-lg rounded-md grid grid-cols-3 gap-5 overflow-hidden'>
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
                className='bg-teal-600 text-white  py-2 px-4 rounded hover:bg-teal-400' 
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faArrowLeft}/>
              </button>
              <span className='text-white m-2'>
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className='bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-400'  
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
  )
}

export default Projects
