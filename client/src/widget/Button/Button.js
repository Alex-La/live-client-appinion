import React from "react";
import "./button.css";

const Button = ({ style, children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
