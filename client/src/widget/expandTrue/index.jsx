import "../../css/expandTrue/expandTrue.css";

import Controlls from "./controlls";
import Footer from "./footer";
import Manager from "./manager";
import Main from "./main";

const ExpandTrue = ({
  handleExpand,
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
          handleExpand={handleExpand}
          handleRemove={handleRemove}
          color={data.mainColor}
        />
        <Manager data={data} />
      </div>
      <Main
        setStartLive={setStartLive}
        setSocket={setSocket}
        setManager={setManager}
        data={data}
      />
      <Footer />
    </div>
  );
};

export default ExpandTrue;
