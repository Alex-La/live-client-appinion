import React, { useContext } from "react";
import "../css/videoLive.css";

import ControlContext from "../context/ControlContext";
import Loader from "../images/loader.svg";

const VideoLive = ({ videoWidth }) => {
  const { isMobile } = useContext(ControlContext);

  return (
    <div
      className="video-live-wrap"
      style={
        isMobile
          ? {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: -1,
            }
          : { width: videoWidth }
      }
    >
      <img src={Loader} alt={"loader"} />
    </div>
  );
};

export default VideoLive;
