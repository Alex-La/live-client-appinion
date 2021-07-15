import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "../css/widget.css";

import ExpandFalse from "./ExpandFalse";
import ExpandTrue from "./expandTrue/ExpandTrue";

const Widget = () => {
  const wrapRef = useRef();

  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleTransitionEnd = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  useEffect(() => {
    const ref = wrapRef.current;
    if (ref) {
      ref.addEventListener("transitionend", handleTransitionEnd, false);
    }
    return () => {
      ref.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [handleTransitionEnd]);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleClose = () => setClose(true);

  if (close) return <Fragment />;

  return (
    <div
      ref={wrapRef}
      className="widget-wrap"
      style={{ width: expand ? 450 : 322, height: expand ? 674 : 122 }}
    >
      {expand
        ? expanded && (
            <ExpandTrue handleExpand={handleExpand} handleClose={handleClose} />
          )
        : !expanded && <ExpandFalse handleExpand={handleExpand} />}
    </div>
  );
};

export default Widget;
