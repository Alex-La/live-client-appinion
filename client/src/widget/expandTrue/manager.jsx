import "../../css/expandTrue/manager.css";

import ManagerImg from "../../images/dispatcher.png";

const Manager = ({ data }) => {
  return (
    <div className="manager-wrap" style={{ "--color": data.mainColor }}>
      <img src={ManagerImg} alt="manager-img" />
      <div className="manager">
        <p className="name">{data.name}</p>
        <p className="description">{data.position}</p>
      </div>
    </div>
  );
};

export default Manager;
