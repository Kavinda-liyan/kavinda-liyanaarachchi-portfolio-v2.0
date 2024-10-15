const FooterWrapper =({children,Title})=>{
    return(

        <>
        <div className='flex flex-col text-center border-r-1 border-slate-300 max-md:border-r-0 max-md:border-b-1 max-md:py-1'>
            <h1 className='font-ubuntu text-xs font-semibold text-slate-600'>{Title}</h1>
                <div className="flex flex-nowrap justify-center h-full">
                    {children}

                </div>
        </div>

        </>
    )
}

export default FooterWrapper