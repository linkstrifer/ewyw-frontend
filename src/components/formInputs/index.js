import React from 'react'

export default function FormInputs({ children, type, name, id, value, onChange }){

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  )
}