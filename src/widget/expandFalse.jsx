import "../css/expandFalse.css";

const ExpandFalse = ({ handleExpand }) => {
  return (
    <div className="expand-false" onClick={handleExpand}>
      <p className="live">LIVE</p>
      <p className="title">Онлайн-консультация</p>
      <p className="time">Доступно с 10:00 до 22:00 по МСК</p>
    </div>
  );
};

export default ExpandFalse;
