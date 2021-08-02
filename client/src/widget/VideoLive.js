import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/videoLive.css";

import ControlContext from "../context/ControlContext";
import SocketContext from "../context/SocketContext";
import Loader from "../images/loader.svg";

import Peer from "peerjs";
import { peerConfig } from "../utils/constants";

const VideoLive = ({ videoWidth }) => {
  const videoRef = useRef();

  const { isMobile, setStartLive } = useContext(ControlContext);
  const { socket, managerId, stream, setStream } = useContext(SocketContext);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      if (videoRef.current.paused) videoRef.current.play();
    }
  }, [stream]);

  useEffect(() => {
    const peer = new Peer(peerConfig);

    peer.on("open", (id) => {
      socket.emit("answer", managerId, id);
    });

    peer.on("error", console.log);

    peer.on("call", (call) => {
      call.answer();
      call.on("stream", (stream) => {
        setStream(stream);
      });
    });

    socket.on("iceCandidate", () => {
      peer.disconnect();
      setStartLive(false);
      setStream("stop");
    });
  }, [socket, setStartLive, setStream]);

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
