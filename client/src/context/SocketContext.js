import { createContext } from "react";

const SocketContext = createContext({
  socket: null,
  peer: null,
  managerId: null,
});

export default SocketContext;
