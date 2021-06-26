import "../../css/expandTrue/footer.css";

import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="logo" />
      <p>Мы используем видео-сервис Appinion</p>
    </div>
  );
};

export default Footer;
