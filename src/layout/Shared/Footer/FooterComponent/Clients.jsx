
import ClientRecords from '../../../../data/clientsRecords.json'
import Tooltip from '../../../../Tooltip/Tooltip';
import FooterWrapper from '../FooterWrapper';

const Clients =()=>{
    return(<>


<FooterWrapper Title={"Clients"}>


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
</FooterWrapper>
       


  
    
    
    </>);
}

export default Clients;