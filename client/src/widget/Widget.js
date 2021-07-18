import React, { Fragment, useState } from "react";

import WidgetWrap from "./WidgetWrap";
import ExpandFalse from "./ExpandFalse";
import ExpandTrue from "./expandTrue/ExpandTrue";

const Widget = () => {
  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);
  const [startLive, setStartLive] = useState(false);

  const handleExpand = () => setExpand(!expand);
  const handleClose = () => setClose(true);

  if (close) return <Fragment />;

  return (
    <WidgetWrap expand={expand} setExpand={setExpand} startLive={startLive}>
      {expand ? (
        <>
          {startLive && <video controls />}
          <ExpandTrue
            handleExpand={handleExpand}
            handleClose={handleClose}
            setStartLive={setStartLive}
          />
        </>
      ) : (
        <ExpandFalse handleExpand={handleExpand} />
      )}
    </WidgetWrap>
  );
};

export default Widget;
