import React from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";
import Form from "./Form";
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
        <Form />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ExpandTrue;
