import React, { Fragment, useContext } from "react";

import ControlContext from "../../../context/ControlContext";

import DefaultMessage from "./DefaultMessage";
import PandingMessage from "./PandingMessage";
import OfferMessage from "./OfferMessage";

const Message = ({ message }) => {
  const { data } = useContext(ControlContext);

  switch (message.type) {
    case "default":
      return <DefaultMessage message={message} color={data.mainColor} />;
    case "panding":
      return <PandingMessage color={data.mainColor} />;
    case "offer":
      return <OfferMessage color={data.mainColor} message={message} />;
    default:
      return <Fragment />;
  }
};

export default Message;
