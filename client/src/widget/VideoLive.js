import React, { useContext, useEffect, useRef } from "react";
import "../css/videoLive.css";

import ControlContext from "../context/ControlContext";
import SocketContext from "../context/SocketContext";
import Loader from "../images/loader.svg";

const VideoLive = ({ videoWidth }) => {
  const videoRef = useRef();

  const { isMobile } = useContext(ControlContext);
  const { stream } = useContext(SocketContext);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      if (videoRef.current.paused) videoRef.current.play();
    }
  }, [stream]);

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
      {stream && stream !== "stop" ? (
        <video ref={videoRef} autoPlay playsInline />
      ) : (
        <img src={Loader} alt={"loader"} />
      )}
    </div>
  );
};

export default VideoLive;
