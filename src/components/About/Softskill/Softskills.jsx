import React from 'react'
import Skillbar from './skillbar'



const Softskills = () => {
  
  return (
    <div className='flex text-center justify-center flex-col '>
       <h1 className='text-red-400  font-ubuntu text-3xl py-5 max-md:text-lg'>Soft Skills</h1>
          
          <div className='flex text-left justify-center gap-10 p-5 w-full max-md:p-2'>
          <div className='w-full grid grid-cols-2 gap-3'>
            
              <Skillbar skill={"Communication Skill"}  present={"80%"}/>
              <Skillbar skill={"Collaboration Skill"}  present={"89%"}/>
              <Skillbar skill={"Creativity Skill"}  present={"80%"}/>
              <Skillbar skill={"Leadership Skill"}  present={"93%"}/>
              <Skillbar skill={"Problem-Solving Skill"}  present={"85%"}/>
              <Skillbar skill={"Self-Motivation"}  present={"78%"}/>
              <Skillbar skill={"Self-Learning"}  present={"96%"}/>
                 
                
           

            
            </div>
            
          </div>

    </div>
      
  )
}

export default Softskills