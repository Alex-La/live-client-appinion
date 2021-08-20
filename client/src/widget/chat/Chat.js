import React, { useContext, useRef, useEffect } from "react";
import SocketContext from "../../context/SocketContext";
import "../../css/chat/chat.css";

import Message from "./messages/Message";

const Chat = () => {
  const scrollRef = useRef();
  const { messages } = useContext(SocketContext);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="appinion-chat" ref={scrollRef}>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
};

export default Chat;
