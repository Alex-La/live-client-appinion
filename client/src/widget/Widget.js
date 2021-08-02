import React, { useEffect } from "react";

import { ControlContextProvider } from "../context/ControlContext";
import { SocketContextProvider } from "../context/SocketContext";

import WebFont from "webfontloader";

import WidgetWrap from "./WidgetWrap";

const Widget = ({ token }) => {
  useEffect(() => {
    WebFont.load({ google: { families: ["Montserrat"] } });
  }, []);

  return (
    <ControlContextProvider token={token}>
      <SocketContextProvider>
        <WidgetWrap />
      </SocketContextProvider>
    </ControlContextProvider>
  );
};

export default Widget;
