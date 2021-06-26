import "../../css/expandTrue/controlls.css";

import Close from "../../images/close.svg";
import Collapse from "../../images/collapse.svg";

const Controlls = ({ handleExpand }) => {
  return (
    <div className="controlls">
      <img src={Collapse} alt="collapse" className="img-collapse" />
      <img
        src={Close}
        alt="close"
        className="img-close"
        onClick={handleExpand}
      />
    </div>
  );
};

export default Controlls;
