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
            
        
        <div className='h-full p-5 max-sm:p-5'>
            <img className='pl-10 pr-10' src={portfolio}></img>
        </div>
            
        </div>
    </div>
    
  )
}

export default Imgcontent