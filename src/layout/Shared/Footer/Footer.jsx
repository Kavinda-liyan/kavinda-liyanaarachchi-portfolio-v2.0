import Clients from "./FooterComponent/Clients";
import Portfoliolist from "./FooterComponent/Portfoliolist";
import Poweredby from "./FooterComponent/Poweredby";


const Footer =()=>{
    var CurrentYear = new Date().getFullYear()
    return(
        <>
        <section className="m-0 p-0 h-auto w-auto border-t-1 float-right bg-slate-200 shadow-md shadow-slate-500 ">
            <div className="m-2 grid grid-cols-3 max-md:grid-cols-1">
                <Clients/>
                
              <Poweredby/>
              <Portfoliolist/>

            </div>
            <p className="text-center py-2 font-nunito font-bold text-xs text-red-600">Copyright &copy;{CurrentYear}</p>

        </section>
        </>
    );
}

export default Footer
