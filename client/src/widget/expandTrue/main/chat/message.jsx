import "../../../../css/expandTrue/main/chat/message.css";

import Manager from "../../../../images/dispatcher.png";

const Message = ({ message }) => {
  if (message.type === "default") return <Default message={message} />;
  return <></>;
};

const Default = ({ message }) => {
  return (
    <div className="message">
      {message.from === "manager" && (
        <div className="icon-wrap" style={{ marginRight: 12 }}>
          <img src={Manager} alt="manager" />
          <p>12:30</p>
        </div>
      )}
      <div className="text">
        <svg
          className="torch"
          style={{ [message.from === "manager" ? "left" : "right"]: -7 }}
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 2.5C6 3.5 7.33333 6.66673 7 10.0001L15 0.499998C10 1.5 9.5 -1.99992 0.5 2.5Z"
            fill="#FDF4F1"
          />
        </svg>

        <p>Готова вас проконсультировать, подключитесь к трансляции</p>
      </div>
      {message.from === "user" && (
        <div className="icon-wrap" style={{ marginLeft: 12 }}>
          <img src={Manager} alt="manager" />
          <p>12:30</p>
        </div>
      )}
    </div>
  );
};

export default Message;
