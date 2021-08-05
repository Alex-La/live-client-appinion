import React, { createContext, useState, useEffect } from "react";

import io from "socket.io-client";
import { socketEndpoint } from "../utils/constants";

const socket = io(socketEndpoint);

const SocketContext = createContext({
  user: null,
  setUser: () => {},
  messages: null,
  stream: null,
  setStream: () => {},
  connect: () => {},
  send: () => {},
  answer: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    socket.on("message", (message) => {
      if (message.type === "stop-live") setStream(null);
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const connect = (user) => socket.emit("user", user);
  const send = (message, id) => socket.emit("message", message, id);
  const answer = (id) => socket.emit("answer", id);

  const socketContextValue = {
    user,
    setUser,
    connect,
    send,
    messages,
    stream,
    setStream,
    answer,
  };

  return (
    <SocketContext.Provider value={socketContextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
