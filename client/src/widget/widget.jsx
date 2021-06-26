import { useState } from "react";
import "../css/widget.css";

import ExpandFalse from "./expandFalse";
import ExpandTrue from "./expandTrue";

const Widget = () => {
  const [expand, setExpand] = useState(false);
  const [dimentions, setDimentions] = useState({
    width: "327px",
    height: "112px",
  });

  const handleExpand = () => {
    setExpand(!expand);
    setDimentions(
      expand
        ? { width: "327px", height: "112px" }
        : { width: "449px", height: "667px" }
    );
  };

  return (
    <div id="appinion-widget-root">
      <div
        className="widget-wrap"
        style={{ "--width": dimentions.width, "--height": dimentions.height }}
      >
        {expand ? (
          <ExpandTrue handleExpand={handleExpand} />
        ) : (
          <ExpandFalse handleExpand={handleExpand} />
        )}
      </div>
    </div>
  );
};

export default Widget;
