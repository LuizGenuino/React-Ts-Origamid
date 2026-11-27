import React from "react";
import { useData } from "../contexts/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  background: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(date);
}

const DateRangeButton = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMes() {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInicio(firstDay.toLocaleDateString("sv-SE"));
    setFinal(lastDay.toLocaleDateString("sv-SE"));
  }

  return (
    <button onClick={setMes} style={style}>
      {nomeMes(n)}
    </button>
  );
};

export default DateRangeButton;
