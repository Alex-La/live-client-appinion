import React, { useContext, useRef, useState, useEffect } from "react";
import "../../css/chat/chat.css";

import SocketContext from "../../context/SocketContext";

import Message from "./messages/Message";

const Chat = () => {
  const { socket } = useContext(SocketContext);

  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, [socket]);

  return (
    <div className="appinion-chat" ref={scrollRef}>
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default Chat;
