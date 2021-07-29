import React, { useContext } from "react";
import "../../css/expandTrue/controlAndManager.css";

import ControlContext from "../../context/ControlContext";

import Text from "../../components/Text/Text";
import Manager from "../../images/dispatcher.png";
import Close from "../../images/js/Close";
import Collapse from "../../images/js/Collapse";

const ControlAndManager = () => {
  const { data, setExpand, setClose } = useContext(ControlContext);

  const handleExpand = () => setExpand(false);
  const handleClose = () => setClose(true);

  return (
    <div className="cam-wrap">
      <div className="manager">
        <div className="img-wrap">
          <img src={Manager} alt="manager" />
          <div className="online" style={{ "--color": data.mainColor }} />
        </div>
        <div className="manager-data">
          <Text weight={600} lineHeight={"22px"}>
            {data.name}
          </Text>
          <Text size={"12px"} lineHeight="22px" color={"#999999"}>
            {data.position}
          </Text>
        </div>
      </div>
      <div className="control">
        <Collapse handleExpand={handleExpand} color={data.mainColor} />
        <Close handleClose={handleClose} color={data.mainColor} />
      </div>
    </div>
  );
};

export default ControlAndManager;
