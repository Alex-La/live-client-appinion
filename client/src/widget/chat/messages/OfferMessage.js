import React, { useContext } from "react";
import Button from "../../../components/Button/Button";
import ControlContext from "../../../context/ControlContext";

import Stream from "../../../images/stream.svg";

const OfferMessage = ({ color, message }) => {
  const { setStartLive } = useContext(ControlContext);

  const handleStart = () => {
    setStartLive(message.id);
  };

  return (
    <Button onClick={handleStart} color={color} style={{ margin: "20px 50px" }}>
      <img src={Stream} alt="stream" style={{ marginRight: 12 }} />
      Подключиться к трансляции
    </Button>
  );
};

export default OfferMessage;
