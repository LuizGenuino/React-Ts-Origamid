import React from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import videoSrc from "./assets/video.mp4";

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

  const video = React.useRef<HTMLVideoElement>(null);

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

  React.useEffect(() => {
    console.log(video.current);
  }, []);

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
          {value ? (
            <ul>
              {value.map((item) => (
                <li key={item.id}>
                  {item.nome} (R$ {item.preco},00): {item.status}
                </li>
              ))}
            </ul>
          ) : (
            <p>Adicione a Data de Inicio e Fim para buscar os dados</p>
          )}
        </div>
      </div>
      <br />
      <br />
      <div>
        <video ref={video} src={videoSrc} muted />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          <button onClick={() => video.current?.play()}>Play</button>
          <button onClick={() => video.current?.pause()}>Pause</button>
        </div>
      </div>
    </>
  );
};

export default HooksComTypes;
