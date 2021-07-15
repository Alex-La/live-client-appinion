import React, { useState } from "react";
import "../css/widget.css";

import ExpandFalse from "./ExpandFalse";
import ExpandTrue from "./expandTrue/ExpandTrue";

const Widget = () => {
  const [expand, setExpand] = useState(true);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div
      className="widget-wrap"
      style={{ width: expand ? 450 : 322, height: expand ? 674 : 122 }}
    >
      {expand ? (
        <ExpandTrue handleExpand={handleExpand} />
      ) : (
        <ExpandFalse handleExpand={handleExpand} />
      )}
    </div>
  );
};

export default Widget;
