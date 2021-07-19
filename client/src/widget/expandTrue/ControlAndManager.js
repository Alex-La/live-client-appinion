import React from "react";
import "../../css/expandTrue/controlAndManager.css";

import Manager from "../../images/dispatcher.png";
import Close from "../../images/js/Close";
import Collapse from "../../images/js/Collapse";

const ControlAndManager = ({ handleExpand, handleClose, data }) => {
  return (
    <div className="cam-wrap">
      <div className="manager">
        <div className="img-wrap">
          <img src={Manager} alt="manager" />
          <div className="online" style={{ "--color": data.mainColor }} />
        </div>
        <div className="manager-data">
          <p className="name">{data.name}</p>
          <p className="position">{data.position}</p>
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
