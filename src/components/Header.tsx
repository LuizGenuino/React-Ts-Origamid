import DateRange from "./DateRange";
import DateRangeButtonList from "./DateRangeButtonList";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const title = location.pathname === "/vendas" ? "Vendas" : "Resumo";

  return (
    <header className="mb">
      <div className="mb daterange">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <DateRangeButtonList />
    </header>
  );
};

export default Header;
