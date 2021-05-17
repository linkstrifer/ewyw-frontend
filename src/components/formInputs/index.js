import React from 'react'

export default function FormInputs({ children, type, name, value, onChange, ref }) {
  return (
    <label>
      <span>{children}</span>
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}