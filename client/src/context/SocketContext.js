import React, { createContext, useContext, useEffect, useState } from "react";
import ControlContext from "./ControlContext";

const SocketContext = createContext({
  user: null,
  setUser: () => {},
  deleteSession: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const { setExpand } = useContext(ControlContext);

  const [user, setUser] = useState();

  useEffect(() => {
    const id = sessionStorage.getItem("appinion_session_id");
    if (id) {
      setExpand(true);
      setUser(true);
    }
  }, []);

  const deleteSession = () => {
    sessionStorage.removeItem("appinion_session_id");
  };

  return (
    <SocketContext.Provider value={{ user, setUser, deleteSession }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
