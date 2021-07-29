import React, { Fragment, useEffect, useState } from "react";

import ControlContext from "../context/ControlContext";
import SocketContext from "../context/SocketContext";

import io from "socket.io-client";
import Peer from "peerjs";
import { socketEndpoint, peerConfig } from "../utils/constants";
import { getData } from "../utils";
import WebFont from "webfontloader";

import WidgetWrap from "./WidgetWrap";

const socket = io(socketEndpoint);
const peer = new Peer(peerConfig);

const Widget = ({ token }) => {
  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [startLive, setStartLive] = useState(false);
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);
  const [regForm, setRegForm] = useState(false);

  const [managerId, setManagerId] = useState(null);

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
      setStartLive(id);
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
      <SocketContext.Provider value={{ socket, peer, managerId }}>
        <WidgetWrap />
      </SocketContext.Provider>
    </ControlContext.Provider>
  );
};

export default Widget;
