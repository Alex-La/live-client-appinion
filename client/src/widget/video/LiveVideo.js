import React, { useEffect, useRef } from "react";

import Peer from "peerjs";

const LiveVideo = ({ socket }) => {
  const videoRef = useRef();

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
      port: 4000,
      path: "/peerjs/appinion",
    });

    peer.on("open", (id) => {
      console.log(id);
    });
    peer.on("error", console.log);

    socket.on("offer", (id) => {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const call = peer.call(id, stream);
        call.on("stream", (str) => {
          console.log(str);
          videoRef.current.srcObject = str;
        });
      });
    });
  }, []);

  return <video ref={videoRef} style={videoStyles} autoPlay />;
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
