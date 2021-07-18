import React from "react";
import "../../css/chat/chat.css";

import FormatMessage from "./messages/FormatMessage";
import PandingMessage from "./messages/PandingMessage";

const Chat = () => {
  return (
    <div className="appinion-chat">
      <FormatMessage />
      <PandingMessage />
    </div>
  );
};

export default Chat;
