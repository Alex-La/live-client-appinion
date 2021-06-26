import { useEffect, useState } from "react";
import "../../../../css/expandTrue/main/chat/chat.css";

import Message from "./message";
import SendControll from "./sendControll";

const Chat = ({ socket }) => {
  const [managerId, setManagerId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("managerId", (id) => {
      setManagerId(id);
    });
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, [socket]);

  return (
    <div className="chat">
      <div className="messages-wrap">
        {messages.map((item, index) => (
          <Message message={{ type: "default", ...item }} key={index} />
        ))}
      </div>
      <SendControll managerId={managerId} socket={socket} />
    </div>
  );
};

export default Chat;
