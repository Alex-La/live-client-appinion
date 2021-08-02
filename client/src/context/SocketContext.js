import { createContext } from "react";

const SocketContext = createContext({
  socket: null,
  managerId: null,
  messages: null,
  setMessages: () => {},
  stream: null,
  setStream: () => {},
});

export default SocketContext;
