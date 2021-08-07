import React, { useState, useContext } from "react";
import "../../css/expandTrue/expandTrue.css";

import uniqid from "uniqid";

import SocketContext from "../../context/SocketContext";
import ControlContext from "../../context/ControlContext";

import ControlAndManager from "./ControlAndManager";
import InfoMessage from "./InfoMessage";
import Form from "./Form";
import Chat from "../chat/Chat";
import ChatForm from "../chat/Form";
import Logo from "./Logo";

const ExpandTrue = () => {
  const { data } = useContext(ControlContext);
  const { connect, user, setUser } = useContext(SocketContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    host: data.host,
    id: uniqid(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem(
      "live.appinion.digital.session",
      JSON.stringify(form)
    );
    setUser(form);
    connect(form);
  };

  return (
    <div className="expand-true">
      <div className="header">
        <ControlAndManager />
      </div>
      <div className="body">
        {user ? (
          <>
            <Chat />
            <ChatForm />
          </>
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
