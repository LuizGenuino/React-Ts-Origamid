import React, { useState } from 'react'
import Button from '../components/Button';
import Input from '../components/Input';

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
      <h1>Props Com TypeScript</h1>
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
    </>
  );
}

export default PropsComTypes