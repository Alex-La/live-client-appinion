import { useState } from "react";
import "../css/widget.css";

import ExpandFalse from "./expandFalse";
import ExpandTrue from "./expandTrue";
import LiveVideo from "./LiveVideo";

const Widget = () => {
  const [expand, setExpand] = useState(false);
  const [dimentions, setDimentions] = useState({
    width: "327px",
    height: "112px",
  });
  const [startLive, setStartLive] = useState(false);
  const [socket, setSocket] = useState(null);
  const [manager, setManager] = useState(null);

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
        {startLive && socket && manager && (
          <LiveVideo socket={socket} manager={manager} />
        )}

        {expand ? (
          <ExpandTrue
            handleExpand={handleExpand}
            setStartLive={setStartLive}
            setSocket={setSocket}
            setManager={setManager}
          />
        ) : (
          <ExpandFalse handleExpand={handleExpand} />
        )}
      </div>
    </div>
  );
};

export default Widget;
