import React, { useState } from "react";
import "../../css/expandTrue/expandTrue.css";

import SocketContext from "../../context/SocketContext";
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
  const [reg, setReg] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReg(true);
  };

  return (
    <div className="expand-true">
      <div className="header">
        <ControlAndManager />
      </div>
      <div className="body">
        {reg ? (
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
