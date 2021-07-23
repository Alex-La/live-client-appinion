import { useContext, useEffect, useState, useCallback } from "react";

import ControlContext from "../context/ControlContext";

const useResize = (transitionRef) => {
  const { expand, startLive, data, setIsMobile, isMobile } =
    useContext(ControlContext);

  const [videoWidth, setVideoWidth] = useState(window.innerWidth - 550);
  const [transition, setTransition] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [props, setProps] = useState({
    [data.location[1] === "left" ? "right" : "left"]: window.innerWidth - 372,
    [data.location[0] === "top" ? "bottom" : "top"]: window.innerHeight - 162,
    [data.location[1]]: 50,
    [data.location[0]]: 40,
  });

  useEffect(() => {
    setVideoWidth(width - 550);
  }, [width]);

  useEffect(() => {
    if (width < 768) setIsMobile(true);
    else setIsMobile(false);
  }, [width, setIsMobile]);

  useEffect(() => {
    if (expand)
      setProps((props) => ({
        ...props,
        [data.location[0] === "top" ? "bottom" : "top"]: isMobile
          ? 0
          : startLive
          ? 40
          : height - 704,
        [data.location[1] === "left" ? "right" : "left"]: isMobile
          ? 0
          : startLive
          ? 50
          : width - 500,
        [data.location[1]]: isMobile ? 0 : 50,
        [data.location[0]]: isMobile ? 0 : 40,
        transform: "scale(1)",
      }));
    else
      setProps((props) => ({
        ...props,
        [data.location[0] === "top" ? "bottom" : "top"]:
          height - (isMobile ? 132 : 162),
        [data.location[1] === "left" ? "right" : "left"]:
          width - (isMobile ? 337 : 372),
        [data.location[0]]: isMobile ? 10 : 40,
        [data.location[1]]: isMobile ? 15 : 50,
        transform: isMobile ? "scale(0.7)" : "none",
        transformOrigin: `${data.location[0]} ${data.location[1]}`,
      }));
  }, [expand, width, data, startLive, isMobile, height]);

  const onTransitionStart = useCallback((e) => {
    if (e.target.className !== "widget-wrap") return;
    setTransition(true);
  }, []);
  const onTransitionEnd = useCallback((e) => {
    if (e.target.className !== "widget-wrap") return;
    setTransition(false);
  }, []);

  useEffect(() => {
    if (transitionRef.current) {
      const ref = transitionRef.current;
      ref.addEventListener("transitionstart", onTransitionStart);
      ref.addEventListener("transitionend", onTransitionEnd);
      return () => {
        ref.removeEventListener("transitionstart", onTransitionStart);
        ref.removeEventListener("transitionend", onTransitionEnd);
      };
    }
  }, [onTransitionStart, onTransitionEnd, transitionRef]);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return { props, transition, videoWidth };
};

export default useResize;
