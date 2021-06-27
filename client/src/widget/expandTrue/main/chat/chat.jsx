import { useEffect, useState } from "react";
import "../../../../css/expandTrue/main/chat/chat.css";

import Message from "./message";
import SendControll from "./sendControll";

const Chat = ({ socket, setStartLive, setManager }) => {
  const [managerId, setManagerId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("managerId", (id) => {
      setManagerId(id);
      setManager(id);
    });
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, [socket, setManager]);

  return (
    <div className="chat">
      <div className="messages-wrap">
        {messages.map((item, index) => (
          <Message
            message={{ type: "default", ...item }}
            key={index}
            setStartLive={setStartLive}
          />
        ))}
      </div>
      <SendControll managerId={managerId} socket={socket} />
    </div>
  );
};

export default Chat;
