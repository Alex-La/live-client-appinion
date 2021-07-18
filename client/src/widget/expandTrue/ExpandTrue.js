import React, { useState } from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";
import Form from "./Form";
import InfoMessage from "./InfoMessage";
import Logo from "./Logo";
import Chat from "../chat/Chat";

const ExpandTrue = ({ handleExpand, handleClose }) => {
  const [registrated, setRegistrated] = useState(true);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrated(true);
  };

  return (
    <div className="expand-true">
      <div className="header">
        <ControlAndManager
          handleExpand={handleExpand}
          handleClose={handleClose}
        />
      </div>
      <div className="body">
        {registrated ? (
          <Chat />
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
