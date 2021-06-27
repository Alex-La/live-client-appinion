import { useEffect, useRef } from "react";

var configuration = {
  sdpSemantics: "plan-b",
  iceServers: [
    {
      urls: "stun:stun.services.mozilla.com",
      username: "louis@mozilla.com",
      credential: "webrtcdemo",
    },
    {
      urls: ["stun:stun.example.com", "stun:stun-1.example.com"],
    },
  ],
};
const pc = new RTCPeerConnection(configuration);

const LiveVideo = ({ socket, manager }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    socket.on("offer", (description) => {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        stream.getTracks().forEach((track) => pc.addTrack(track, stream));
        pc.setRemoteDescription(description).then(() => {
          pc.createAnswer().then((desc) => {
            pc.setLocalDescription(desc).then(() => {
              socket.emit("answer", manager, pc.localDescription);
            });
          });
        });
      });
    });
  }, [socket, manager]);

  useEffect(() => {
    pc.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("iceCandidate", e.candidate);
      }
    };

    socket.on("iceCandidate", (candidate) => {
      pc.addIceCandidate(new RTCIceCandidate(candidate));
    });
  }, [socket]);

  useEffect(() => {
    pc.ontrack = (e) => {
      videoRef.current.srcObject = e.streams[0];
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      id="appinion-live-stream"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        borderRadius: 10,
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
};

export default LiveVideo;
