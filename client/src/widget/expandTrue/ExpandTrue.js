import React, { useState, useContext, Fragment } from "react";
import "../../css/expandTrue/expandTrue.css";

import uniqid from "uniqid";

import ControlContext from "../../context/ControlContext";
import SocketContext from "../../context/SocketContext";

import ControlAndManager from "./ControlAndManager";
import InfoMessage from "./InfoMessage";
import Form from "./Form";
import Chat from "../chat/Chat";
import ChatForm from "../chat/Form";
import Logo from "./Logo";

const ExpandTrue = () => {
  const { data } = useContext(ControlContext);
  const { createSession, user } = useContext(SocketContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    host: data.host,
    id: uniqid(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createSession(form);
  };

  return (
    <div className="expand-true">
      <div className="appinion-widget-header">
        <ControlAndManager />
      </div>
      <div className="appinion-widget-body">
        {user ? (
          <Chat />
        ) : (
          <Fragment>
            <InfoMessage />
            <Form form={form} setForm={setForm} handleSubmit={handleSubmit} />
          </Fragment>
        )}
      </div>
      {user && <ChatForm />}
      <div className="appinion-widget-footer">
        <Logo />
      </div>
    </div>
  );
};

export default ExpandTrue;
