import React, { createContext, useState, useEffect, useContext } from "react";

import io from "socket.io-client";
import Peer from "peerjs";
import { socketEndpoint, peerConfig } from "../utils/constants";
import ControlContext from "./ControlContext";

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
  endsession: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const { setStartLive, setExpand } = useContext(ControlContext);

  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("live.appinion.digital.session")) {
      setExpand(true);
      const session = JSON.parse(
        sessionStorage.getItem("live.appinion.digital.session")
      );
      setUser(session);
      reconnect(session.id, session.host);
      getMessages(session.id, session.host);
    }
  }, []);

  useEffect(() => {
    if (user && user.id) {
      const peer = new Peer(user.id, peerConfig);
      peer.on("call", (call) => {
        call.answer();
        call.on("stream", (stream) => {
          setStream(stream);
        });
      });
    }
  }, [user]);

  useEffect(() => {
    socket.on("message", (message) => {
      if (message.type === "stop-live") {
        setStream(null);
        setMessages((messages) => [
          ...messages.filter((mes) => mes.type !== "offer"),
          message,
        ]);
      } else setMessages((messages) => [...messages, message]);
    });

    socket.on("messages", (messages) => {
      setMessages(messages);
    });

    socket.on("endcall", () => {
      setStartLive(false);
      setStream(null);
    });
  }, [setStartLive]);

  const connect = (user) => socket.emit("user", user);
  const reconnect = (id, host) => socket.emit("reconnect", id, host);
  const send = (message, id) => socket.emit("message", message, id, user.host);
  const getMessages = (id, host) => socket.emit("messages", id, host);
  const answer = () => {
    socket.emit("answer", user.id);
    setStartLive(true);
  };
  const endsession = () => {
    socket.emit("endsession");
    sessionStorage.removeItem("live.appinion.digital.session");
  };

  const socketContextValue = {
    user,
    setUser,
    connect,
    send,
    messages,
    stream,
    setStream,
    answer,
    endsession,
  };

  return (
    <SocketContext.Provider value={socketContextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
