import { Element } from "react-scroll";
import ConatctForm from "./contactmeform";
import Social from "./Social";
import SectionLayoutWrapper from "../../layout/Shared/SectionLayoutWrapper";



const Contact = ()=>{

    return(
        <>
        <Element name="contactSection">

        
    <SectionLayoutWrapper Title={"Contact"}>
                <div className=" grid grid-cols-2 w-auto bg-white shadow-md rounded overflow-hidden max-md:grid-cols-1 m-2">
                    <Social/>
                  <ConatctForm/>

                </div>

    </SectionLayoutWrapper>
              
            
    </Element>
        </>
    );

}
export default Contact