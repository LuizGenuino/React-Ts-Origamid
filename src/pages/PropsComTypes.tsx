import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";

const PropsComTypes = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState("");

  const incrementar = () => {
    setTotal((total) => total + 1);
  };

  const decrementar = () => {
    setTotal((total) => total + 1);
  };

  return (
    <>
      <h1>Props Com TypeScript e os Types Definidos pelo React</h1>
      <p>
        Dica: O proprio VS Code informa o tipo do elemento apenas apassando o
        mouse em cima, use isso para tipar as props ou parametros
      </p>
      <div style={{ display: "flex" }}>
        <Button className="btn" tamanho={"1.1rem"} onClick={incrementar}>
          Incrementar
        </Button>
        <p>Total: {total}</p>
        <Button style={{ background: "red" }} onClick={decrementar}>
          Decrementar
        </Button>
      </div>

      <br></br>
      <p>Data Selecionada: {data}</p>
      <Input id="email" label="Email" type="email" />
      <Input id="password" label="Senha" type="password" />
      <Input id="name" label="Nome" type="text" />
      <Input
        id="date"
        label="Data de Nascimento"
        type="date"
        onChange={(e) => setData(e.target.value)}
      />

      <br /><br />
      <CheckBox label="Aceitar" />
    </>
  );
};

export default PropsComTypes;
