import React, { Fragment, useContext } from "react";

import ControlContext from "../../../context/ControlContext";

import DefaultMessage from "./DefaultMessage";
import PandingMessage from "./PandingMessage";
import OfferMessage from "./OfferMessage";
import StopMessage from "./StopMessage";

const Message = ({ message }) => {
  const { data, setStartLive } = useContext(ControlContext);

  switch (message.type) {
    case "default":
      return <DefaultMessage message={message} color={data.mainColor} />;
    case "panding":
      return <PandingMessage color={data.mainColor} />;
    case "offer":
      return <OfferMessage color={data.mainColor} message={message} />;
    case "stop-live":
      setStartLive(false);
      return <StopMessage />;
    default:
      return <Fragment />;
  }
};

export default Message;
