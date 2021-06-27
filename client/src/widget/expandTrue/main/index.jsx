import { useEffect, useState } from "react";
import "../../../css/expandTrue/main/main.css";

import io from "socket.io-client";

import Connection from "./connection";
import Chat from "./chat/chat";

const socket = io("https://api.appinion.digital");

const Main = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => () => socket.disconnect(), []);

  return (
    <div className="main">
      {isConnected ? (
        <Chat socket={socket} />
      ) : (
        <Connection socket={socket} setIsConnected={setIsConnected} />
      )}
    </div>
  );
};

export default Main;
