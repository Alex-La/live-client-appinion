import React, { Fragment, useEffect, useState } from "react";

import WidgetWrap from "./WidgetWrap";
import ExpandFalse from "./ExpandFalse";
import ExpandTrue from "./expandTrue/ExpandTrue";

const Widget = ({ token }) => {
  const [data, setData] = useState(null);

  const [expand, setExpand] = useState(false);
  const [close, setClose] = useState(false);
  const [startLive, setStartLive] = useState(false);

  const handleExpand = () => setExpand(!expand);
  const handleClose = () => {
    setClose(true);
    setStartLive(false);
  };

  useEffect(() => {
    getData(token).then((data) => setData(data.data.videoWidget));
  }, [token]);

  useEffect(() => {
    if (!expand) setStartLive(false);
  }, [expand]);

  if (close) return <Fragment />;

  return (
    <WidgetWrap expand={expand} setExpand={setExpand} startLive={startLive}>
      {expand ? (
        <ExpandTrue
          handleExpand={handleExpand}
          handleClose={handleClose}
          data={data}
        />
      ) : (
        <ExpandFalse handleExpand={handleExpand} />
      )}
    </WidgetWrap>
  );
};

export default Widget;

const query = `query videoWidget($id: String!) {
  videoWidget(id: $id) {
     _id
    projectId
    userId
		type
		location
		staButton
		staText
		staLink
		name
		position
		mainColor
		textColor
		utmLabel
    host
  	videos {
      id
      filename
      mimetype
      path
    }
    createdAt
    tariffType
  }
}`;

const getData = async (token) => {
  try {
    const response = await fetch("https://api.appinion.digital/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { id: token },
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
