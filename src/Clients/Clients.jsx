import React from 'react'
import popcorn from '../assets/Images/clients/popcorn.png'
import Clientcard from './Clientcard'
import Tooltip from '../Tooltip/Tooltip'
import clientRecords from '../data/clientsRecords.json'
const Clients = () => {
  return (
    <section className='mt-10 w-full h-full '>
      <div className='text-center justify-center flex-col m-10 p-10'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-3/4'>
          <h1 className='text-teal-600 font-ubuntu text-5xl py-5'>Clients</h1>
          <div className='h-full w-full p-10 bg-slate-800 shadow-lg rounded-md grid grid-cols-4 gap-0 overflow-hidden'>

            {
              clientRecords.map((client,index)=>(
                <Tooltip key={index} message={client.client}> 
                 <Clientcard clientimg={client.img}/>
                </Tooltip>
              ))
            }

                
                
               
                

            </div>

          </div>
          </div>
          </div>
          </section>
  )
}

export default Clients