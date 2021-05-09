import React from 'react'

export default function Button({type, children, handleClick}){

  return(
    <button
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}