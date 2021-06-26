import "../../css/expandTrue/expandTrue.css";

import Controlls from "./controlls";
import Manager from "./manager";

const ExpandTrue = ({ handleExpand }) => {
  return (
    <div className="expand-true">
      <div className="header-wrap">
        <Controlls handleExpand={handleExpand} />
        <Manager />
      </div>
      <div>Menu</div>
      <div>footer</div>
    </div>
  );
};

export default ExpandTrue;
