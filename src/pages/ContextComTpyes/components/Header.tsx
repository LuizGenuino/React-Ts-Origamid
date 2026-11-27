import React from "react";
import { useUi } from "../contexts/Uicontext";
import { useUser } from "../contexts/USerContext";

const Header = () => {
  const { dark } = useUi();
  const { data } = useUser();

  return (
    <div>
      <h1>Header: {String(dark)}</h1>
      <p>Usando o Context para mudar valores em componentes diferentes </p>
      {data && <h1>{data.nome}</h1>}
    </div>
  );
};

export default Header;
