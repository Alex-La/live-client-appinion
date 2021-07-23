import React from "react";
import "./button.css";

import { LightenDarkenColor } from "../../utils";

const Button = ({
  style,
  children,
  type,
  onClick,
  color,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={{
        ...style,
        "--shadow-color": `${color}3F`,
        "--default-color": color,
        "--hover-color": LightenDarkenColor(color, 20),
        "--disabled-back-color": LightenDarkenColor(color, 30),
        "--disabled-color": LightenDarkenColor(color, -20),
        "--active-color": LightenDarkenColor(color, -10),
      }}
    >
      {children}
    </button>
  );
};

export default Button;
