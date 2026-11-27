import React from "react";
import { useData } from "../contexts/DataContext";
import DateRange from "./DateRange";

const Header = () => {
  //   const { data } = useData();
  //   console.table(data);
  return (
    <div>
      <DateRange />
    </div>
  );
};

export default Header;
