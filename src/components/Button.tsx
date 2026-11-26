import React from "react";

// type ButtonProps = {
//   tamanho?: string;
//   children: ReactNode; // representa qualquer tipo react = string, number, tag, components react e etc
//   onClick?: () => void;
// };

type ButtonProps = React.PropsWithChildren<{
  // ja cria o children por padrão, colocando apenas as outras props
  tamanho?: string;
  onClick?: () => void;
}>;

const Button = ({ children, onClick, tamanho }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho || "1.2rem" }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
