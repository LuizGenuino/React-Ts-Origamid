import React, { type ReactNode } from 'react'

type ButtonProps = {
    tamanho?: string
    children: ReactNode // representa qualquer tipo react = string, number, tag, components react e etc
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button style={{fontSize: props.tamanho || '1.2rem'}} onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Button