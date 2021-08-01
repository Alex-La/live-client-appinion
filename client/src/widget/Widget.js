import React, { Fragment, useEffect, useState } from "react";

import ControlContext from "../context/ControlContext";
import SocketContext from "../context/SocketContext";

import io from "socket.io-client";
import { socketEndpoint } from "../utils/constants";
import { getData } from "../utils";
import WebFont from "webfontloader";

import WidgetWrap from "./WidgetWrap";

const socket = io(socketEndpoint);

const Widget = ({ token }) => {
  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [startLive, setStartLive] = useState(false);
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);
  const [regForm, setRegForm] = useState(false);

  const [managerId, setManagerId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getData(token).then((data) => setData(data));
  }, [token]);

  useEffect(() => {
    WebFont.load({ google: { families: ["Montserrat"] } });
  }, []);

  useEffect(() => {
    socket.on("managerId", (id) => {
      setManagerId(id);
    });

    socket.on("offer", (id) => {
      socket.emit("message", { type: "offer", id }, managerId);
    });
  }, []);

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
      <SocketContext.Provider
        value={{ socket, managerId, messages, setMessages }}
      >
        <WidgetWrap />
      </SocketContext.Provider>
    </ControlContext.Provider>
  );
};

export default Widget;
