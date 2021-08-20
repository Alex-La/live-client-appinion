import React, { useContext, Suspense, Fragment, useRef, useMemo } from "react";
import "../css/widget.css";

import ControlContext from "../context/ControlContext";

import ErrorBoundary from "../components/rander/ErrorBoundary";

import useResize from "../hooks/resize.hook";
import ExpandFalse from "./ExpandFalse";
import ExpandTrue from "./expandTrue/ExpandTrue";
import VideoLive from "./VideoLive";

const WidgetWrap = () => {
  const transitionRef = useRef();
  const { startLive, expand } = useContext(ControlContext);

  const { props, transition, videoWidth } = useResize(transitionRef);

  const randerEntries = useMemo(() => {
    if (transition) return <Fragment />;
    else if (expand) return <ExpandTrue />;
    else return <ExpandFalse />;
    //eslint-disable-next-line
  }, [transition, videoWidth]);

  const randerShadow = useMemo(() => {
    if (!transition && expand && startLive)
      return <div className="back-opacity" />;
    //eslint-disable-next-line
  }, [transition]);

  return (
    <ErrorBoundary>
      {randerShadow}
      <div className="widget-wrap" style={props} ref={transitionRef}>
        {expand && startLive && <VideoLive videoWidth={videoWidth} />}
        <Suspense fallback={<Fragment />}>{randerEntries}</Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default WidgetWrap;
