import DateInput from "./DateInput";
import { useData } from "../contexts/DataContext";

const DateRange = () => {
  const { inicio, final, setInicio, setFinal } = useData();
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        id="inicio"
        label="Inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        id="final"
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
