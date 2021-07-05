import { useEffect, useRef, useState } from "react";

var configuration = {
  sdpSemantics: "plan-b",
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};
const pc = new RTCPeerConnection(configuration);

const LiveVideo = ({ socket, manager, remoteDescription }) => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      setStream(stream);
    });
  }, []);

  useEffect(() => {
    if (remoteDescription && stream) {
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));
      pc.setRemoteDescription(remoteDescription).then(() => {
        pc.createAnswer().then((desc) => {
          pc.setLocalDescription(desc).then(() => {
            socket.emit("answer", manager, pc.localDescription);
          });
        });
      });
    }
  }, [socket, manager, remoteDescription, stream]);

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
