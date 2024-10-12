
import ClientRecords from '../../../../data/clientsRecords.json'
import Tooltip from '../../../../Tooltip/Tooltip';

const Clients =()=>{
    return(<>


<div className='flex flex-col text-center border-r-1 border-slate-600'>
    <h1>Clients</h1>
<div className="flex flex-nowrap justify-center h-full">
    

        {
            ClientRecords.map((clients,index)=>{
                return(
                    <div className=' text-center flex items-center '> 
                    

                    <Tooltip message={clients.client}>
                    <div className="p-2 w-auto h-auto" key={index}>
                        <img className=' w-14 h-14 rounded-md' src={clients.img} alt={clients.img} />
                       
                       
                    </div>
                    </Tooltip>
                    </div>
                    
                    
                )
            })
        }

       


    </div>
</div>
    
    
    </>);
}

export default Clients;