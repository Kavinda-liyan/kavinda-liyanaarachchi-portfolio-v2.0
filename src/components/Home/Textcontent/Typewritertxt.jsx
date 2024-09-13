import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Typewritertxt = (props) => {
  return (
                    <div className='border-b-0 border-slate-700'>
                      <h1 className={`text-slate-300 ${props.fontsize} px-5 py-2 font-nunito`}>{props.interducetxt}<span className='text-teal-500'>{props.typeName} <Cursor/></span> </h1>
                    </div>
  )
}

export default Typewritertxt