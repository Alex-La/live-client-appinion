import "../../css/expandTrue/expandTrue.css";

import Controlls from "./controlls";
import Footer from "./footer";
import Manager from "./manager";
import Main from "./main";

const ExpandTrue = ({ handleExpand, setStartLive, setSocket, setManager }) => {
  return (
    <div className="expand-true">
      <div className="header-wrap">
        <Controlls handleExpand={handleExpand} />
        <Manager />
      </div>
      <Main
        setStartLive={setStartLive}
        setSocket={setSocket}
        setManager={setManager}
      />
      <Footer />
    </div>
  );
};

export default ExpandTrue;
