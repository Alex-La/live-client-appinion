import React, { useContext, useEffect, useRef, Fragment } from "react";
import "../css/videoLive.css";

import ControlContext from "../context/ControlContext";
import Loader from "../images/loader.gif";
import Eye from "../images/eye.svg";

import Text from "../components/Text/Text";

const VideoLive = ({ videoWidth }) => {
  const videoRef = useRef();

  const { isMobile } = useContext(ControlContext);

  // useEffect(() => {
  //   if (stream && videoRef.current) {
  //     videoRef.current.srcObject = stream;
  //     if (videoRef.current.paused) videoRef.current.play();
  //   }
  // }, [stream]);

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
          : { width: videoWidth, position: "relative" }
      }
    >
      {false ? (
        <Fragment>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              objectFit: "contain",
              backgroundColor: "black",
            }}
          />

          <div className="stream-indicator">
            <img src={Eye} alt="eye" style={{ marginRight: 8 }} />
            <Text
              weight="700"
              size="14px"
              lineHeight="105.9%"
              letterSpacing="0.055em"
              color="white"
            >
              LIVE
            </Text>
          </div>
        </Fragment>
      ) : (
        <img src={Loader} alt="loader" width={276} />
      )}
    </div>
  );
};

export default VideoLive;
