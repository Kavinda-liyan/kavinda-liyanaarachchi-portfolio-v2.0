import React from 'react'
import Counter from '../../counter/Counter'
import Jobcard from '../Jobcard'
import expirence from "../../../data/expirencerecords.json"
import Expirencecounter from "../../../data/expirenceCounter.json"
const Experience = () => {
  return (
    <div className='flex text-center justify-center flex-col '>
      <h1 className='text-red-400  font-ubuntu text-3xl py-5'>Expierience</h1>
          <div className='flex text-center justify-center gap-10 p-5'> 
              {
                Expirencecounter.map((counter,index)=>{
                  return(
                    <Counter key={index} start={0} end={counter.year} type={"Years"} discription={counter.discription}/>
                  )
                })
              }
          </div>
          <div className='flex text-left justify-center gap-10 p-5 w-full'>
          <div className='w-full grid grid-cols-3 max-lg:grid-cols-1 gap-8 overflow-hidden p-5'>
            {
              expirence.map( (record,index)=>{
                return(
                  
                  <Jobcard 
                  key={index}
                  designation={record.designation} 
                  company={record.company}
                  year={record.year}
                  Color1={record.color1}
                  Color2={record.color2}
                  description={record.description}
                  />
                )
              })
            }
            </div>
            
          </div>

    </div>
      
  )
}

export default Experience