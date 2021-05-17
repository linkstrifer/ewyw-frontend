import React from 'react'

export default function SelectCut({id, name, onChange, label, options}){

  return(
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        onChange={onChange}
      >
        <option>Selecciona una opción</option>
        { !!options && options.length > 0 && options.map((el, index ) =>( <option key={index} value={el}>{el}</option> ))}
      </select>
    </>
  )
}