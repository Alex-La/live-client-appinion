import React from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";

const ExpandTrue = ({ handleExpand, handleClose }) => {
  return (
    <div className="expand-true">
      <ControlAndManager
        handleExpand={handleExpand}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ExpandTrue;
