import React, { Fragment, useContext } from "react";
import Button from "../../../components/Button/Button";
import ControlContext from "../../../context/ControlContext";

import Stream from "../../../images/stream.svg";
import Text from "../../../components/Text/Text";
import SocketContext from "../../../context/SocketContext";

const OfferMessage = ({ color, message }) => {
  const { setStartLive, startLive, data } = useContext(ControlContext);
  const { stream } = useContext(SocketContext);

  const handleStart = () => {
    setStartLive(message.id);
  };

  if (stream === "stop") return <Fragment />;

  if (stream)
    return (
      <div style={{ margin: "10px 50px" }}>
        <Text
          weight="600"
          lineHeight="22px"
          style={{
            padding: "14px 20px",
            backgroundColor: `${data.mainColor}3F`,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          Вы подключились к трансляции
        </Text>
      </div>
    );

  if (startLive) {
    return (
      <div style={{ margin: "10px 50px" }}>
        <Text
          weight="600"
          lineHeight="22px"
          style={{
            padding: "14px 20px",
            backgroundColor: `#F2F2F2`,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          Дождитесь подключения, это займет несколько секунд
        </Text>
      </div>
    );
  }

  return (
    <Button onClick={handleStart} color={color} style={{ margin: "20px 50px" }}>
      <img src={Stream} alt="stream" style={{ marginRight: 12 }} />
      Подключиться к трансляции
    </Button>
  );
};

export default OfferMessage;
