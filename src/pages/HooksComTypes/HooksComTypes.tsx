import React from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";

type User = {
  nome: string;
  profissao: string;
  idade: number;
};

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
};

function user(): User {
  return {
    nome: "Luiz",
    profissao: "Dev",
    idade: 25,
  };
}

const HooksComTypes = () => {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);

  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [value, SetValue] = React.useState<null | Venda[]>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 3000);
  }, []);

  React.useEffect(() => {
    if (inicio && final) {
      fetch(
        `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
        {
          method: "GET",
        },
      )
        .then((r) => r.json())
        .then((json) => SetValue(json as Venda[]))
        .catch((error) => console.log(error));
    }
  }, [inicio, final]);

  return (
    <>
      <h1>2 - Hooks Com Types</h1>
      <br />
      {!data ? <p>Carregando...</p> : <p>{JSON.stringify(data)}</p>}
      <br />
      <p>Total: {total}</p>
      <Button incrementar={setTotal} />
      <br />
      <br />
      <div>
        <div style={{ display: "flex", gap: "14px" }}>
          <Input
            id="inicio"
            label="Inicio"
            type="date"
            setState={setInicio}
            value={inicio}
          />
          <Input
            id="final"
            label="Final"
            type="date"
            setState={setFinal}
            value={final}
          />
        </div>
        <div>
          <ul>
            {value &&
              value.map((item) => (
                <li key={item.id}>
                  {item.nome} (R$ {item.preco},00): {item.status}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HooksComTypes;
