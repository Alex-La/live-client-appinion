import React, { useState } from "react";
import "../css/widget.css";

import ExpandFalse from "./ExpandFalse";

const Widget = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div
      className="widget-wrap"
      style={{ width: expand ? 450 : 322, height: expand ? 674 : 122 }}
    >
      {expand ? "" : <ExpandFalse handleExpand={handleExpand} />}
    </div>
  );
};

export default Widget;
