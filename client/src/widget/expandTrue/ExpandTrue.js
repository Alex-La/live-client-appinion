import React from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";
import InfoMessage from "./InfoMessage";

const ExpandTrue = ({ handleExpand, handleClose }) => {
  return (
    <div className="expand-true">
      <div className="header">
        <ControlAndManager
          handleExpand={handleExpand}
          handleClose={handleClose}
        />
      </div>
      <div className="body">
        <InfoMessage />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ExpandTrue;
