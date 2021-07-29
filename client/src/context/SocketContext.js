import { createContext } from "react";

const SocketContext = createContext({
  socket: null,
  managerId: null,
});

export default SocketContext;
