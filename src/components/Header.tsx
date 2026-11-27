import React from "react";
import DateRange from "./DateRange";
import DateRangeButtonList from "./DateRangeButtonList";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
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
