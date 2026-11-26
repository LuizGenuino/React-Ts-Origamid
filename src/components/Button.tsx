import React from "react";

// type ButtonProps = {
//   tamanho?: string;
//   children: ReactNode; // representa qualquer tipo react = string, number, tag, components react e etc
//   onClick?: () => void;
// };

//   // ja cria o children por padrão, colocando apenas as outras props
// type ButtonProps = React.PropsWithChildren<{
//   tamanho?: string;
//   onClick?: () => void;
// }>;

// alem de criar o children, agora adiciona todos os parametros do type button como props (ex: onClick, className e etc)
type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({ children, tamanho, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho || "1.2rem" }} {...props}>
      {children}
    </button>
  );
};

export default Button;
