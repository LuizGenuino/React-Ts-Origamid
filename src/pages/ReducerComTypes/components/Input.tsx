import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
    id: string
    label: string
}

const Input = ({label, id, ...props}: InputProps) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type='text' id={id} name={id} {...props} />
    </div>
  )
}

export default Input