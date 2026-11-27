import DateRangeButton from "./DateRangeButton";

const DateRangeButtonList = () => {
  return (
    <div className="flex">
      <DateRangeButton n={-3} />
      <DateRangeButton n={-2} />
      <DateRangeButton n={-1} />
      <DateRangeButton n={0} />
    </div>
  );
};

export default DateRangeButtonList;
