import "../../css/expandTrue/expandTrue.css";

import Controlls from "./controlls";
import Footer from "./footer";
import Manager from "./manager";
import Main from "./main";

const ExpandTrue = ({
  handleExpand,
  startLive,
  setStartLive,
  setSocket,
  setManager,
  handleRemove,
  data,
}) => {
  return (
    <div className="expand-true">
      <div className="header-wrap">
        <Controlls
          startLive={startLive}
          handleExpand={handleExpand}
          handleRemove={handleRemove}
          color={data.mainColor}
        />
        {!startLive && <Manager data={data} />}
      </div>
      <Main
        setStartLive={setStartLive}
        setSocket={setSocket}
        setManager={setManager}
        data={data}
        startLive={startLive}
      />
      {!startLive && <Footer />}
    </div>
  );
};

export default ExpandTrue;
