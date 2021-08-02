import React, { createContext, Fragment, useState, useEffect } from "react";
import { getData } from "../utils";

const ControlContext = createContext({
  data: null,
  startLive: null,
  setStartLive: () => {},
  expand: null,
  setExpand: () => {},
  setClose: () => {},
  isMobile: null,
  setIsMobile: () => {},
  regForm: null,
  setRegForm: () => {},
});

export const ControlContextProvider = ({ token, children }) => {
  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [startLive, setStartLive] = useState(false);
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);
  const [regForm, setRegForm] = useState(false);

  useEffect(() => {
    getData(token).then((data) => setData(data));
  }, [token]);

  const controlContextValue = {
    data,
    startLive,
    setStartLive,
    expand,
    setExpand,
    setClose,
    isMobile,
    setIsMobile,
    regForm,
    setRegForm,
  };

  if (!data || !data.online || close) return <Fragment />;

  return (
    <ControlContext.Provider value={controlContextValue}>
      {children}
    </ControlContext.Provider>
  );
};

export default ControlContext;
