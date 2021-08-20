import React, { createContext, useContext, useEffect, useState } from "react";
import ControlContext from "./ControlContext";

import io from "socket.io-client";
import { socketEndpoint } from "../utils/constants";

const socket = io(socketEndpoint);

const SocketContext = createContext({
  user: null,
  messages: [],
  stream: null,
  setStream: () => {},
  setUser: () => {},
  deleteSession: () => {},
  createSession: () => {},
  sendMessage: () => {},
  answer: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const { setExpand, setStartLive } = useContext(ControlContext);

  const [user, setUser] = useState();
  const [messages, setMessages] = useState([]);
  const [stream, setStream] = useState();

  useEffect(() => {
    const sesString = sessionStorage.getItem("appinion_session_id");
    const session = sesString && JSON.parse(sesString);
    if (session) {
      socket.emit("getsession", session);
    }
  }, []);

  useEffect(() => {
    socket.on("getsession", (user) => {
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

    socket.on("endcall", (id, host) => {
      socket.emit("messages", id, host);
      setStream(null);
      setStartLive(false);
    });
  }, [setExpand, setStartLive]);

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

  const answer = () => socket.emit("answer", user.id);

  return (
    <SocketContext.Provider
      value={{
        user,
        messages,
        stream,
        setStream,
        setUser,
        deleteSession,
        createSession,
        sendMessage,
        answer,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
