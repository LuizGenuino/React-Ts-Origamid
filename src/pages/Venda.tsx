import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { Venda as VendaData } from "../contexts/DataContext";
import Loading from "../components/Loading";

type VendaSemData = Omit<VendaData, 'data'>

const Venda = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if(loading) return <Loading />
  if(!data) return null


  return <div>
    <div className="box mb">ID: {data.id}</div>
    <div className="box mb">Nome: {data.nome}</div>
    <div className="box mb">Preço: {data.preco.toLocaleString('pt-br', {currency: 'BRL', style: 'currency'})}</div>
    <div className="box mb">Status: {data.status}</div>
    <div className="box mb">Pagamento: {data.pagamento}</div>
  </div>;
};

export default Venda;
