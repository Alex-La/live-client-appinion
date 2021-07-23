import React from "react";
import "../../css/expandTrue/logo.css";

import LogoImg from "../../images/logo.svg";
import Text from "../../components/Text/Text";

const Logo = () => {
  return (
    <div className="appinion-logo">
      <Text color="#999999" size={"12px"} lineHeight={"14px"}>
        Мы используем
      </Text>
      <img src={LogoImg} alt="logo" width={60} height={28} />
    </div>
  );
};

export default Logo;
