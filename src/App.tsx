import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [total, setTotal] = useState(0);

  const incrementar = () => {
    setTotal((total) => total + 1);
  };

  return (
    <>
      <h1>Hello World</h1>
      <p>Total: {total}</p>
      <Button tamanho={"1.5rem"} onClick={incrementar}>Incrementar</Button>
    </>
  );
}

export default App;
