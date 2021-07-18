import React from "react";
import "../../css/chat/chat.css";

import Form from "./Form";
import FormatMessage from "./messages/FormatMessage";

const Chat = () => {
  return (
    <div className="appinion-chat">
      <FormatMessage />
      <Form />
    </div>
  );
};

export default Chat;
