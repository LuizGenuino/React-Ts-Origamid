import React from "react";
import useFetch from "../hooks/useFetch";

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};

type IDataContext = {
  data: Venda[] | null;
  error: string | null;
  loading: boolean;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

function getDate(n: number = 0) {
  const data = new Date();
  data.setDate(data.getDate() - n);

  const formatada = data.toLocaleDateString("sv-SE");

  return formatada;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(14));
  const [final, setFinal] = React.useState(getDate());

  const { data, error, loading } = useFetch<Venda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  return (
    <DataContext.Provider
      value={{ data, error, loading, inicio, final, setInicio, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};
