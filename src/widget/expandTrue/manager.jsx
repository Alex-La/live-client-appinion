import "../../css/expandTrue/manager.css";

import ManagerImg from "../../images/dispatcher.png";

const Manager = () => {
  return (
    <div className="manager-wrap">
      <img src={ManagerImg} alt="manager-img" />
      <div className="manager">
        <p className="name">Ирина Иванова</p>
        <p className="description">Онлайн-консультант, магазина Чистокот</p>
      </div>
    </div>
  );
};

export default Manager;
