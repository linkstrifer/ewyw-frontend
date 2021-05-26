import React from 'react'
import './styles.css'

export default function Button({type, children, handleClick}){

  return(
    <button
      className='buttonApp'
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}