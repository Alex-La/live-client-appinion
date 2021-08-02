import React, { useContext, useRef, useEffect, useState } from "react";
import "../../css/chat/chat.css";

import SocketContext from "../../context/SocketContext";

import Message from "./messages/Message";

const Chat = () => {
  const { socket, setMessages, messages } = useContext(SocketContext);

  const scrollRef = useRef();

  const [message, setMessage] = useState();

  useEffect(() => {
    socket.on("message", (message) => {
      setMessage(message);
      if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, []);

  useEffect(() => {
    if (message) {
      setMessages((messages) => [...messages, message]);
    }
  }, [message]);

  return (
    <div className="appinion-chat" ref={scrollRef}>
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default Chat;
