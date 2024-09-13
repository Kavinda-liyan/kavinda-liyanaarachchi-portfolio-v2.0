import React from 'react'

const Animationrounds = (props) => {
  return (
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${props.bgcolor1}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3  ${props.bgcolor2}`}></span>
                            </span>
  )
}

export default Animationrounds