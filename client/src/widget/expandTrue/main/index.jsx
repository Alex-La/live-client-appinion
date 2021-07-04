import { useEffect, useState } from "react";
import "../../../css/expandTrue/main/main.css";

import io from "socket.io-client";

import Connection from "./connection";
import Chat from "./chat/chat";

const socket = io("http://localhost:4000");

const Main = ({ setStartLive, setSocket, setManager, data }) => {
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
          color={data.mainColor}
        />
      ) : (
        <Connection
          socket={socket}
          setIsConnected={setIsConnected}
          color={data.mainColor}
          host={data.host}
        />
      )}
    </div>
  );
};

export default Main;
