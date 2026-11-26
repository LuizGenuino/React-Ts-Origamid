import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
    id: string
    label: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({label, id, setState, ...props}: InputProps) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type='text' id={id} name={id} onChange={({target}) => setState(target.value)} {...props} />
    </div>
  )
}

export default Input