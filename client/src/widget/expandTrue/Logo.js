import React from "react";
import "../../css/expandTrue/logo.css";

import LogoImg from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className="appinion-logo">
      <p>Мы используем</p>
      <img src={LogoImg} alt="logo" />
    </div>
  );
};

export default Logo;
