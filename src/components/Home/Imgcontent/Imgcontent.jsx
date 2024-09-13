import React from 'react'
import portfolio from '../../../assets/Images/portfolio/newportfolio.png'
import { useTypewriter } from 'react-simple-typewriter';
const Imgcontent = () => {
    const [symbol] = useTypewriter({
        words: [ ".","..", "./" , "<","</","</>",".","..", "./" ],
        loop: 0,  // 0 means infinite loop; set to 1 or more for limited loops
      });
  return (
    <div className='flex h-screen m-5 justify-center items-center rounded-full '>
        <div className='w-screen h-screen m-2 flex items-center overflow-hidden  relative' >
            <div className=' rounded-full bg-teal-600 border-2 shadow-lg shadow-black p-10 text-right right-10 bottom-24 h-36 w-36 z-10 absolute flex items-center justify-center opacity-80' >
            <h1 className='text-6xl z-10 text-slate-100 font-nunito '>{symbol}</h1>
            </div>
        
        <div className='h-full p-10'>
            <img className=' ' src={portfolio}></img>
        </div>
            
        </div>
    </div>
    
  )
}

export default Imgcontent