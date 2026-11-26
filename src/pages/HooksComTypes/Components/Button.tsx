import React from "react";

type ButtonProps = {
  incrementar: React.Dispatch<React.SetStateAction<number>>; // assim especifica exatamente o valor do setTotal
};

const Button = ({ incrementar }: ButtonProps) => {
  return <button onClick={() => incrementar((n) => n + 1)}>Add</button>;
};

export default Button;
