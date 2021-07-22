import React, { useEffect, useRef, useState } from "react";

import Peer from "peerjs";

const LiveVideo = ({ socket, managerId, isMobile }) => {
  const videoRef = useRef();

  const [stream, setStream] = useState(null);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    const peer = new Peer({
      config: {
        iceServers: [
          {
            urls: "turn:www.turn.appinion.digital:3478",
            username: "turnuser",
            credential: "HIRM!aung3noow_blop",
          },
          { urls: "stun:www.stun.appinion.digital:3478" },
        ],
      },
      host: "api.appinion.digital",
      secure: true,
      path: "/peerjs/appinion",
    });

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
    // socket.on("offer", (id) => {
    //   navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    //     const call = peer.call(id, stream);
    //     call.on("stream", (str) => {
    //       videoRef.current.srcObject = str;
    //     });
    //   });
    // });
  }, [socket]);

  return (
    <video
      ref={videoRef}
      style={isMobile ? videoStyles : { objectFit: "cover" }}
      autoPlay
    />
  );
};

const videoStyles = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
  objectFit: "cover",
  width: "100%",
  height: "100%",
  zIndex: -1,
};

export default LiveVideo;
