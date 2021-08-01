import React, { useContext, useRef, useEffect } from "react";
import "../../css/chat/chat.css";

import SocketContext from "../../context/SocketContext";

import Message from "./messages/Message";

const Chat = () => {
  const { socket, messages, setMessages } = useContext(SocketContext);

  const scrollRef = useRef();

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, [socket, setMessages]);

  return (
    <div className="appinion-chat" ref={scrollRef}>
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default Chat;
