import React from "react";

type DateInputType = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

const DateInput = ({ label, id, ...props }: DateInputType) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="date" {...props} />
    </div>
  );
};

export default DateInput;
