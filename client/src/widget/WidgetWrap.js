import React, { useCallback, useEffect, useRef, useState } from "react";

const WidgetWrap = ({ expand, startLive, children }) => {
  const wrapRef = useRef();
  const [transitionEnd, setTransitionEnd] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

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
          left: isMobile && expand ? 0 : width - (expand ? 500 : 372),
          height: expand ? (isMobile ? window.innerHeight : 674) : 122,
          transform: isMobile ? (expand ? "scale(1)" : "scale(0.7)") : "none",
          transformOrigin: "bottom right",
        }}
      >
        {transitionEnd && children}
      </div>
    </>
  );
};

export default WidgetWrap;
