import React from "react";
import "../css/expandFalse.css";

import ArrowOpen from "../images/arrowOpen.svg";

const ExpandFalse = () => {
  return (
    <div className="expand-false">
      <div className="live">
        <div className="live-indicator" />
        <p className="live-text">LIVE</p>
        <div className="live-open">
          <img src={ArrowOpen} alt="arrow-open" />
        </div>
      </div>

      <p className="info">Онлайн-консультация</p>
      <p className="timing">Доступно с 10:00 до 22:00 по МСК</p>
    </div>
  );
};

export default ExpandFalse;
