import { useEffect, useState } from "react";
import "../../../css/expandTrue/main/main.css";

import io from "socket.io-client";

import Connection from "./connection";
import Chat from "./chat/chat";

const socket = io();

const Main = ({ setStartLive, setSocket, setManager }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setSocket(socket);
    return () => socket.disconnect();
  }, [setSocket]);

  return (
    <div className="main">
      {isConnected ? (
        <Chat
          socket={socket}
          setStartLive={setStartLive}
          setManager={setManager}
        />
      ) : (
        <Connection socket={socket} setIsConnected={setIsConnected} />
      )}
    </div>
  );
};

export default Main;
