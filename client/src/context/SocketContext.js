import React, { createContext, useState, useEffect } from "react";

import io from "socket.io-client";
import { socketEndpoint } from "../utils/constants";

const socket = io(socketEndpoint);

const SocketContext = createContext({
  socket: null,
  managerId: null,
  messages: null,
  setMessages: () => {},
  stream: null,
  setStream: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const [managerId, setManagerId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    socket.on("managerId", (id) => {
      setManagerId(id);
    });

    socket.on("offer", (id) => {
      socket.emit("message", { type: "offer", id }, managerId);
    });
  }, []);

  useEffect(() => {
    if (stream === "stop") {
      setMessages((messages) => [...messages, { type: "stop-live" }]);
    }
  }, [stream]);

  const socketContextValue = {
    socket,
    managerId,
    messages,
    setMessages,
    stream,
    setStream,
  };

  return (
    <SocketContext.Provider value={socketContextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
