import React, { Fragment, useEffect, useState } from "react";

import ControlContext from "../context/ControlContext";
import { getData } from "../utils";
import WebFont from "webfontloader";

import WidgetWrap from "./WidgetWrap";

const Widget = ({ token }) => {
  const [data, setData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [startLive, setStartLive] = useState(false);
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    getData(token).then((data) => setData(data));
  }, [token]);

  useEffect(() => {
    WebFont.load({ google: { families: ["Montserrat"] } });
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
  };

  if (!data || close) return <Fragment />;

  return (
    <ControlContext.Provider value={controlContextValue}>
      <WidgetWrap />
    </ControlContext.Provider>
  );
};

export default Widget;
