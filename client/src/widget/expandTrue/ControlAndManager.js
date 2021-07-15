import React from "react";
import "../../css/expandTrue/controlAndManager.css";

import Manager from "../../images/dispatcher.png";
import Close from "../../images/js/Close";
import Collapse from "../../images/js/Collapse";

const ControlAndManager = ({ handleExpand }) => {
  return (
    <div className="cam-wrap">
      <div className="manager">
        <div className="img-wrap">
          <img src={Manager} alt="manager" />
          <div className="online" />
        </div>
        <div className="manager-data">
          <p className="name">Ирина Иванова</p>
          <p className="position">Онлайн-консультант, магазина Чистокот</p>
        </div>
      </div>
      <div className="control">
        <Collapse />
        <Close />
      </div>
    </div>
  );
};

export default ControlAndManager;
