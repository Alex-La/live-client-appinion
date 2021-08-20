import React, { useEffect } from "react";

import { ControlContextProvider } from "../context/ControlContext";

import WebFont from "webfontloader";

import WidgetWrap from "./WidgetWrap";
import { SocketContextProvider } from "../context/SocketContext";

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
