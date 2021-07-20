import React, { useCallback, useEffect, useRef, useState } from "react";
import "../css/widget.css";

import Peer from "peerjs";

const WidgetWrap = ({ expand, startLive, children, data }) => {
  const videoRef = useRef();
  const wrapRef = useRef();
  const [transitionEnd, setTransitionEnd] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const peer = new Peer("candy-shop-one", {
      host: "api.appinion.digital",
      // port: 4000,
      path: "/peerjs/appinion",
    });
    peer.on("open", (id) => {
      console.log(id);
    });

    const coon = peer.connect("candy-shop-two");

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const call = peer.call("candy-shop-two", stream);
      call.on("stream", (stream) => {
        console.log(stream);
        videoRef.current.srcObject = stream;
      });
    });
  }, [data]);

  useEffect(() => {
    if (width <= 768) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);

  const resize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const onTransitionStart = useCallback((e) => {
    if (e.target.className !== "widget-wrap") return;
    setTransitionEnd(false);
  }, []);
  const onTransitionEnd = useCallback((e) => {
    if (e.target.className !== "widget-wrap") return;
    setTransitionEnd(true);
  }, []);

  useEffect(() => {
    const ref = wrapRef.current;
    ref.addEventListener("transitionstart", onTransitionStart);
    ref.addEventListener("transitionend", onTransitionEnd);
    return () => {
      ref.removeEventListener("transitionstart", onTransitionStart);
      ref.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [onTransitionStart, onTransitionEnd]);

  return (
    <>
      {startLive && <div className="back-opacity" />}
      <div
        ref={wrapRef}
        className="widget-wrap"
        style={{
          bottom: isMobile ? (expand ? 0 : 10) : 40,
          right: isMobile ? (expand ? 0 : 15) : 50,
          left:
            isMobile && expand
              ? 0
              : startLive
              ? 50
              : width - (expand ? 500 : 372),
          height: expand ? (isMobile ? window.innerHeight : 674) : 122,
          transform: isMobile ? (expand ? "scale(1)" : "scale(0.7)") : "none",
          transformOrigin: "bottom right",
          display: startLive ? "flex" : "inline-block",
        }}
      >
        {transitionEnd && (
          <>
            <div style={{ display: "flex", width: "100%" }}></div>
            <video ref={videoRef} style={videoStyles} autoPlay />

            {children}
          </>
        )}
      </div>
    </>
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

export default WidgetWrap;
