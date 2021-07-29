import React, { useState, useContext } from "react";
import "../../css/expandTrue/expandTrue.css";

import SocketContext from "../../context/SocketContext";
import ControlContext from "../../context/ControlContext";
import io from "socket.io-client";
import Peer from "peerjs";
import { socketEndpoint, peerConfig } from "../../utils/constants";

import ControlAndManager from "./ControlAndManager";
import InfoMessage from "./InfoMessage";
import Form from "./Form";
import Chat from "../chat/Chat";
import ChatForm from "../chat/Form";
import Logo from "./Logo";

const socket = io(socketEndpoint);
const peer = new Peer(peerConfig);

const ExpandTrue = () => {
  const { regForm, setRegForm, data } = useContext(ControlContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    host: data.host,
    time: "12:37",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegForm(form);
    socket.emit("user", form);
  };

  return (
    <div className="expand-true">
      <div className="header">
        <ControlAndManager />
      </div>
      <div className="body">
        {regForm ? (
          <SocketContext.Provider value={{ socket, peer }}>
            <Chat />
            <ChatForm />
          </SocketContext.Provider>
        ) : (
          <>
            <InfoMessage />
            <Form form={form} setForm={setForm} handleSubmit={handleSubmit} />
          </>
        )}
      </div>
      <div className="footer">
        <Logo />
      </div>
    </div>
  );
};

export default ExpandTrue;
