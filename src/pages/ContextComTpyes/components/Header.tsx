import React from "react";
import { useUi } from "../contexts/Uicontext";

const Header = () => {
  const {dark} = useUi()

  return (
    <div>
      <h1>Header: {String(dark)}</h1>
      <p>Usando o Context para mudar valores em componentes diferentes </p>
    </div>
  );
};

export default Header;
