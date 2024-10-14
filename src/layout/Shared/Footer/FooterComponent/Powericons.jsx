const Powericons =(props)=>{
    return(<>
      <div className="flex items-center m-2 justify-center">
            <img className={`w-6 h-6 ${props.animation}` } src={props.image}/>
            <p className="px-2 font-nunito font-semibold text-xs text-slate-500">{props.power}</p>
        </div>
    
    
    </>)
}

export default Powericons