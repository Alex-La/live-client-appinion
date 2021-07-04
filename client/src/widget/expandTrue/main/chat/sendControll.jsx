import { useState, useRef } from "react";
import "../../../../css/expandTrue/main/chat/sendControll.css";

const SendControll = ({ managerId, socket, color }) => {
  const inputRef = useRef();

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
    <form onSubmit={handleSend} className="send-control">
      <input
        ref={inputRef}
        placeholder="Ваше сообщение"
        value={message}
        onChange={handleChange}
        style={{ "--color": color }}
      />
      <button type="submit" style={{ backgroundColor: color }}>
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
      </button>
    </form>
  );
};

export default SendControll;
