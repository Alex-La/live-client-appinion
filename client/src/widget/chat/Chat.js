import React, { useEffect, useRef, useState } from "react";
import "../../css/chat/chat.css";
import DefaultMessage from "./messages/DefaultMessage";

import FormatMessage from "./messages/FormatMessage";
import PandingMessage from "./messages/PandingMessage";

const Chat = ({ data, socket }) => {
  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, [socket]);

  return (
    <div className="appinion-chat" ref={scrollRef}>
      {messages.map((message) => (
        <DefaultMessage message={message} color={data.mainColor} />
      ))}
    </div>
  );
};

export default Chat;
