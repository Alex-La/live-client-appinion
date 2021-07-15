import React from "react";
import "../../css/expandTrue/expandTrue.css";

import ControlAndManager from "./ControlAndManager";

const ExpandTrue = ({ handleExpand }) => {
  return (
    <div className="expand-true">
      <ControlAndManager handleExpand={handleExpand} />
    </div>
  );
};

export default ExpandTrue;
