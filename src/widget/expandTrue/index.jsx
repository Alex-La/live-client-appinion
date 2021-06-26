import "../../css/expandTrue/expandTrue.css";

import Controlls from "./controlls";

const ExpandTrue = ({ handleExpand }) => {
  return (
    <div className="expand-true">
      <Controlls handleExpand={handleExpand} />
    </div>
  );
};

export default ExpandTrue;
