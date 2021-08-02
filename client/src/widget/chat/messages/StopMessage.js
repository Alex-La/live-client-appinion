import React, { useContext } from "react";

import Text from "../../../components/Text/Text";
import ControlContext from "../../../context/ControlContext";

const StopMessage = () => {
  const { data } = useContext(ControlContext);

  return (
    <div style={{ margin: "10px 50px" }}>
      <Text
        weight="600"
        lineHeight="22px"
        color="white"
        style={{
          padding: "14px 20px",
          backgroundColor: data.mainColor,
          borderRadius: 5,
          textAlign: "center",
          boxShadow: `0px 8px 18px ${data.mainColor}19`,
        }}
      >
        Трансляция завершена
      </Text>
    </div>
  );
};

export default StopMessage;
