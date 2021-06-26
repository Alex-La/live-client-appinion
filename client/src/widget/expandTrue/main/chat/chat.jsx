import "../../../../css/expandTrue/main/chat/chat.css";

import Message from "./message";
import SendControll from "./sendControll";

const Chat = () => {
  return (
    <div className="chat">
      <div className="messages-wrap">
        <Message message={{ type: "default", from: "manager" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
        <Message message={{ type: "default", from: "user" }} />
      </div>
      <SendControll />
    </div>
  );
};

export default Chat;
