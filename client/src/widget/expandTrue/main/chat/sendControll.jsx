import "../../../../css/expandTrue/main/chat/sendControll.css";

const SendControll = () => {
  return (
    <div className="send-control">
      <input placeholder="Ваше сообщение" />
      <button>
        <svg
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.453369 14.1067L6.56004 8L0.453369 1.88L2.33337 0L10.3334 8L2.33337 16L0.453369 14.1067Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SendControll;
