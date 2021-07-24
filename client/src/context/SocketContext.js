import { createContext } from "react";

import io from "socket.io-client";
import Peer from "peerjs";
import { socketEndpoint, peerConfig } from "../utils/constants";

const socket = io(socketEndpoint);
const peer = new Peer(peerConfig);

const SocketContext = createContext({
  socket,
  peer,
});

export default SocketContext;
