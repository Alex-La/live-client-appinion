import React from "react";
import "../../../css/chat/messages/pandingMessage.css";

const PandingMessage = ({ color }) => {
  return (
    <div className="panding-message" style={{ "--color": `${color}19` }}>
      <p className="title">Наш продавец уже увидел ваше сообщение</p>
      <p className="panding">В течение 2 минут он свяжется с вами!</p>
    </div>
  );
};

export default PandingMessage;
