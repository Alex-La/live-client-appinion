import React from "react";
import "../../css/chat/chat.css";

import FormatMessage from "./messages/FormatMessage";
import PandingMessage from "./messages/PandingMessage";

const Chat = ({ data }) => {
  return (
    <div className="appinion-chat">
      <FormatMessage color={data.mainColor} />
      <PandingMessage color={data.mainColor} />
    </div>
  );
};

export default Chat;
