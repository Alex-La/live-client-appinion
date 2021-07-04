import { useEffect, useState, useRef } from "react";
import "../../../../css/expandTrue/main/chat/chat.css";

import Message from "./message";
import SendControll from "./sendControll";

const Chat = ({ socket, setStartLive, setManager, color }) => {
  const scrollRef = useRef();

  const [managerId, setManagerId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("managerId", (id) => {
      setManagerId(id);
      setManager(id);
    });
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, [socket, setManager]);

  return (
    <div className="chat">
      <div className="messages-wrap" ref={scrollRef}>
        {messages.map((item, index) => (
          <Message
            message={{ type: "default", ...item }}
            key={index}
            setStartLive={setStartLive}
            color={color}
          />
        ))}
      </div>
      <SendControll managerId={managerId} socket={socket} color={color} />
    </div>
  );
};

export default Chat;
