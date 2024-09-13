import React from 'react'
import EducatioCard from './EducatioCard'
import EducationRecords from '../../../data/educationRecord.json'
const Education = () => {
  return (
    <div className='flex text-center justify-center flex-col '>
      <h1 className='text-teal-600 font-ubuntu text-5xl py-5'>Education</h1>
          
          <div className='flex text-left justify-center gap-10 p-5 w-full'>
          <div className='w-full grid grid-cols-1 gap-8 overflow-hidden'>
             {
              EducationRecords.map( (education,index)=>{
                return(
                    <EducatioCard 
                    key={index}
                    title={education.title}
                    institute={education.institute}
                    year={education.year}
                    description={education.description}
                    eduTitle={education.eduTitle}/>
                  
                )
              })
            } 
            </div>
            
          </div>

    </div>
      
  )
}

export default Education