import React from 'react'
import portfolio from '../../../assets/Images/portfolio/newportfolio.png'
import { useTypewriter } from 'react-simple-typewriter';
const Imgcontent = () => {
    const [symbol] = useTypewriter({
        words: [ ".","..", "./" , "<","</","</>",".","..", "./" ],
        loop: 0,  // 0 means infinite loop; set to 1 or more for limited loops
      });
  return (
    <div className='flex h-full  justify-center items-center rounded-full '>
        <div className='w-screen h-full  flex items-center overflow-hidden  relative' >
            
        
        <div className='h-auto p-5 max-md:p-0 '>
            <img className='pl-10 pr-10 max-md:p-0 ' src={portfolio} ></img>
        </div>
            
        </div>
    </div>
    
  )
}

export default Imgcontent