import React, { useState } from "react";
import "./textField.css";

const TextField = ({ label, type = "text" }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="text-field-root">
      <input
        id="text-field"
        type={type}
        placeholder=""
        value={value}
        onChange={handleChange}
      />
      {label && <label htmlFor="text-field">{label}</label>}
    </div>
  );
};

export default TextField;
