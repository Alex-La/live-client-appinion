import React, { useContext, useRef, useEffect } from "react";
import "../../css/chat/chat.css";

import SocketContext from "../../context/SocketContext";

import Message from "./messages/Message";

const Chat = () => {
  const { messages } = useContext(SocketContext);

  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="appinion-chat" ref={scrollRef}>
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default Chat;
