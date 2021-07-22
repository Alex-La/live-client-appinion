import React, { useEffect, useState } from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";
import Form from "./Form";
import InfoMessage from "./InfoMessage";
import Logo from "./Logo";
import Chat from "../chat/Chat";
import ChatForm from "../chat/Form";

const ExpandTrue = ({
  handleExpand,
  handleClose,
  data,
  socket,
  managerId,
  setManagerId,
}) => {
  const [registrated, setRegistrated] = useState(false);
  const [form, setForm] = useState({
    host: data.host,
    time: "12:37",
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrated(true);
  };

  useEffect(() => {
    if (registrated) socket.emit("user", form);
  }, [socket, form, registrated]);

  useEffect(() => {
    socket.on("managerId", (id) => {
      setManagerId(id);
    });
  }, [socket]);

  return (
    <div className="expand-true">
      <div className="header">
        <ControlAndManager
          data={data}
          handleExpand={handleExpand}
          handleClose={handleClose}
        />
      </div>
      <div className="body">
        {registrated ? (
          <>
            <Chat data={data} socket={socket} />
            <ChatForm
              color={data.mainColor}
              socket={socket}
              managerId={managerId}
            />
          </>
        ) : (
          <>
            <InfoMessage color={data.mainColor} />
            <Form
              form={form}
              setForm={setForm}
              handleSubmit={handleSubmit}
              color={data.mainColor}
            />
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
