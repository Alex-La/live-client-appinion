import "../../css/expandTrue/logo.css";

import LogoImg from "../../images/logo.svg";
import Text from "../../components/Text/Text";

const Logo = () => {
  return (
    <div className="appinion-logo">
      <a
        className="logo-link"
        referrerPolicy="no-referrer"
        rel="noreferrer"
        href="https://appinion.digital"
        target="_blank"
      >
        <Text color="#999999" size={"12px"} lineHeight={"14px"}>
          Мы используем
        </Text>
        <img src={LogoImg} alt="logo" width={60} height={28} />
      </a>
    </div>
  );
};

export default Logo;
