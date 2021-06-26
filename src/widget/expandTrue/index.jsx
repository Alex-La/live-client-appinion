import "../../css/expandTrue/expandTrue.css";

import Controlls from "./controlls";
import Footer from "./footer";
import Manager from "./manager";

const ExpandTrue = ({ handleExpand }) => {
  return (
    <div className="expand-true">
      <div className="header-wrap">
        <Controlls handleExpand={handleExpand} />
        <Manager />
      </div>
      <div style={{ height: "100%" }}>Menu</div>
      <Footer />
    </div>
  );
};

export default ExpandTrue;
