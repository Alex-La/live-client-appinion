import React from "react";
import "./textField.css";

const TextField = ({
  label,
  type = "text",
  value = "",
  onChange,
  name,
  style,
  placeholder,
}) => {
  return (
    <div className="text-field-root" style={style}>
      <input
        id="text-field"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {label && <label htmlFor="text-field">{label}</label>}
    </div>
  );
};

export default TextField;
