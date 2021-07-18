import React from "react";
import "../../css/chat/chat.css";

import FormatMessage from "./messages/FormatMessage";

const Chat = () => {
  return (
    <div className="appinion-chat">
      <FormatMessage />
      <FormatMessage />
    </div>
  );
};

export default Chat;
