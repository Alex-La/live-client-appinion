import React, { useState, useEffect } from "react";
import "../../css/chat/form.css";

import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";

const Form = ({ color, socket, managerId }) => {
  const [message, setMessage] = useState("");
  const handleChange = (e) => setMessage(e.target.value);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.length !== 0) {
      socket.emit("message", { message, from: "user" }, managerId);
      setMessage("");
    }
  };

  return (
    <form className="send-form" onSubmit={handleSend}>
      <TextField
        placeholder={"Ваше сообщение"}
        style={{ width: "100%", "--color": color }}
        onChange={handleChange}
        value={message}
      />
      <Button style={{ width: 50, marginLeft: 20 }} color={color} type="submit">
        <svg
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.453369 14.1067L6.56004 8L0.453369 1.88L2.33337 0L10.3334 8L2.33337 16L0.453369 14.1067Z"
            fill="white"
          />
        </svg>
      </Button>
    </form>
  );
};

export default Form;
