import React, { useState } from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";
import InfoMessage from "./InfoMessage";
import Form from "./Form";
import Chat from "../chat/Chat";
import ChatForm from "../chat/Form";
import Logo from "./Logo";

const ExpandTrue = () => {
  const [reg, setReg] = useState(true);
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
