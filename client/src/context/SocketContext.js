import React, { createContext, useContext, useEffect, useState } from "react";
import ControlContext from "./ControlContext";

import io from "socket.io-client";
import { socketEndpoint } from "../utils/constants";

const socket = io(socketEndpoint);

const SocketContext = createContext({
  user: null,
  messages: [],
  setUser: () => {},
  deleteSession: () => {},
  createSession: () => {},
  sendMessage: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const { setExpand } = useContext(ControlContext);

  const [user, setUser] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const sesString = sessionStorage.getItem("appinion_session_id");
    const session = sesString && JSON.parse(sesString);
    if (session) {
      socket.emit("getsession", session);
    }
  }, []);

  useEffect(() => {
    socket.on("getsession", (user) => {
      console.log(user);
      setUser(user);
      socket.emit("messages", user.id, user.host);
      setExpand(true);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("messages", (messages) => {
      setMessages(messages);
    });
  }, []);

  const createSession = (user) => {
    setUser(user);
    sessionStorage.setItem(
      "appinion_session_id",
      JSON.stringify({ id: user.id, host: user.host })
    );
    socket.emit("user", user);
  };

  const deleteSession = () => {
    sessionStorage.removeItem("appinion_session_id");
    socket.emit("endsession");
  };

  const sendMessage = (message) =>
    socket.emit("message", message, user.id, user.host);

  return (
    <SocketContext.Provider
      value={{
        user,
        messages,
        setUser,
        deleteSession,
        createSession,
        sendMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
