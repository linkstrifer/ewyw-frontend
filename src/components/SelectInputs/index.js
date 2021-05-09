import React from 'react'

export default function Select({id, name, onChange, label, options}){

  return(
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        onChange={onChange}
      >
        { !!options && options.length > 0 && options.map((el, index ) =>( <option key={index} value={el.toLowerCase()}>{el}</option> ))}
      </select>
    </>
  )
}