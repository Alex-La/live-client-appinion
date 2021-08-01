import { createContext } from "react";

const SocketContext = createContext({
  socket: null,
  managerId: null,
  messages: null,
  setMessages: () => {},
});

export default SocketContext;
