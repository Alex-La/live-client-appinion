import { createContext } from "react";

const SocketContext = createContext({
  socket: null,
  peer: null,
});

export default SocketContext;
