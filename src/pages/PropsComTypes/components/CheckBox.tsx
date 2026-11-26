import React from "react";

type CheckBoxProps = {
  label: string;
};

const CheckBox = ({ label }: CheckBoxProps) => {
  const [value, setValue] = React.useState(false);

//   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     setValue(event.currentTarget.checked);
//   };

  return (
    <label
      style={{
        padding: "1rem",
        border: value ? "2px solid #8D2" : "2px solid #F70",
      }}
    >
      <input
        type="checkbox"
        checked={value}
        // onChange={handleChange} // se for algo complexo utilize funções externas senão faça inline
        onChange={({ currentTarget }) => setValue(currentTarget.checked)} // como é inline o ts add o type automaticamente
      />
      {label}
    </label>
  );
};

export default CheckBox;
