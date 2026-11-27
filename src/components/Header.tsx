import DateRange from "./DateRange";
import DateRangeButtonList from "./DateRangeButtonList";

const Header = () => {
  //   const { data } = useData();
  //   console.table(data);
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <DateRangeButtonList />
    </header>
  );
};

export default Header;
