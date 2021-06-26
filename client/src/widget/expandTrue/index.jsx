import "../../css/expandTrue/expandTrue.css";

import Controlls from "./controlls";
import Footer from "./footer";
import Manager from "./manager";
import Main from "./main";

const ExpandTrue = ({ handleExpand }) => {
  return (
    <div className="expand-true">
      <div className="header-wrap">
        <Controlls handleExpand={handleExpand} />
        <Manager />
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default ExpandTrue;
