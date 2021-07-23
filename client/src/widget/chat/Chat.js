import React, { useContext, useRef, useState } from "react";
import "../../css/chat/chat.css";
import DefaultMessage from "./messages/DefaultMessage";

// import FormatMessage from "./messages/FormatMessage";
// import PandingMessage from "./messages/PandingMessage";

import ControlContext from "../../context/ControlContext";

const Chat = () => {
  const { data } = useContext(ControlContext);

  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);

  return (
    <div className="appinion-chat" ref={scrollRef}>
      {messages.map((message) => (
        <DefaultMessage message={message} color={data.mainColor} />
      ))}
    </div>
  );
};

export default Chat;
