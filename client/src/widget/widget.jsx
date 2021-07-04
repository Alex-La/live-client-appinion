import { Fragment, useEffect, useState } from "react";
import "../css/widget.css";

import ExpandFalse from "./expandFalse";
import ExpandTrue from "./expandTrue";
import LiveVideo from "./LiveVideo";

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
    const response = await fetch("http://localhost:4000/graphql", {
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

const Widget = ({ token }) => {
  const [expand, setExpand] = useState(false);
  const [remove, setRemove] = useState(false);
  const [dimentions, setDimentions] = useState({
    width: "327px",
    height: "112px",
  });
  const [startLive, setStartLive] = useState(false);
  const [socket, setSocket] = useState(null);
  const [manager, setManager] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(token).then((data) => {
      setData(data.data.videoWidget);
      setLoading(false);
    });
  }, [token]);

  const handleRemove = () => setRemove(true);
  const handleExpand = () => {
    setExpand(!expand);
    setDimentions(
      expand
        ? { width: "327px", height: "112px" }
        : { width: "449px", height: "667px" }
    );
  };

  if (remove) return <Fragment />;

  return loading ? (
    <Fragment />
  ) : (
    <div id="appinion-widget-root">
      <div
        className="widget-wrap"
        style={{ "--width": dimentions.width, "--height": dimentions.height }}
      >
        {startLive && socket && manager && (
          <LiveVideo socket={socket} manager={manager} />
        )}

        {expand ? (
          <ExpandTrue
            handleExpand={handleExpand}
            handleRemove={handleRemove}
            setStartLive={setStartLive}
            setSocket={setSocket}
            setManager={setManager}
            data={data}
          />
        ) : (
          <ExpandFalse handleExpand={handleExpand} />
        )}
      </div>
    </div>
  );
};

export default Widget;
