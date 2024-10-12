import Clients from "./FooterComponent/Clients";
import Portfoliolist from "./FooterComponent/Portfoliolist";


const Footer =()=>{
    return(
        <>
        <section className="m-0 p-0 h-auto w-auto border-t-1 ">
            <div className="m-2 grid grid-cols-3">
                <Clients/>
                <Portfoliolist/>
              

            </div>

        </section>
        </>
    );
}

export default Footer
