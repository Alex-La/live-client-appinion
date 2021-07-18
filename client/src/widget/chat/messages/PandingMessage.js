import React from "react";
import "../../../css/chat/messages/pandingMessage.css";

const PandingMessage = () => {
  return (
    <div className="panding-message">
      <p className="title">Наш продавец уже увидел ваше сообщение</p>
      <p className="panding">В течение 2 минут он свяжется с вами!</p>
    </div>
  );
};

export default PandingMessage;
