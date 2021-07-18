import React from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";
import Form from "./Form";
import InfoMessage from "./InfoMessage";
import Logo from "./Logo";

const ExpandTrue = ({ handleExpand, handleClose, setStartLive }) => {
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
        <Form setStartLive={setStartLive} />
      </div>
      <div className="footer">
        <Logo />
      </div>
    </div>
  );
};

export default ExpandTrue;
