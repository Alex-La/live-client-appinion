import { useState } from "react";
import "../../../css/expandTrue/main/connection.css";

const Connection = ({ socket, setIsConnected }) => {
  const [form, setForm] = useState({
    host: "https://candy-shop.su",
    email: "",
    name: "",
    time: "12:37",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("user", form);
    setIsConnected(true);
  };

  return (
    <div className="connection">
      <div className="message">
        <p className="title">
          Хотите увидеть товар вживую или нужна консультация?
        </p>
        <p className="description">
          Введите ваши контактные данные, и менеджер свяжется с вами по видео
          или аудио-связи
        </p>
        <div className="info">
          <Icon />
          <p>Вам включать камеру не нужно!</p>
        </div>
      </div>

      <form onSubmit={handleSend} className="form">
        <input
          type="name"
          placeholder="Ваше имя"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="email"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">Продолжить</button>
      </form>
    </div>
  );
};

const Icon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.812 0C5.289 0 0 5.289 0 11.812C0 18.335 5.289 23.625 11.812 23.625C18.335 23.625 23.625 18.335 23.625 11.812C23.625 5.289 18.335 0 11.812 0ZM14.271 18.307C13.663 18.547 13.179 18.729 12.816 18.855C12.454 18.981 12.033 19.044 11.554 19.044C10.818 19.044 10.245 18.864 9.837 18.505C9.429 18.146 9.226 17.691 9.226 17.138C9.226 16.923 9.241 16.703 9.271 16.479C9.302 16.255 9.351 16.003 9.418 15.72L10.179 13.032C10.246 12.774 10.304 12.529 10.35 12.301C10.396 12.071 10.418 11.86 10.418 11.668C10.418 11.326 10.347 11.086 10.206 10.951C10.063 10.816 9.794 10.75 9.393 10.75C9.197 10.75 8.995 10.779 8.788 10.84C8.583 10.903 8.405 10.96 8.259 11.016L8.46 10.188C8.958 9.985 9.435 9.811 9.89 9.667C10.345 9.521 10.775 9.449 11.18 9.449C11.911 9.449 12.475 9.627 12.872 9.979C13.267 10.332 13.466 10.791 13.466 11.355C13.466 11.472 13.452 11.678 13.425 11.972C13.398 12.267 13.347 12.536 13.273 12.783L12.516 15.463C12.454 15.678 12.399 15.924 12.349 16.199C12.3 16.474 12.276 16.684 12.276 16.825C12.276 17.181 12.355 17.424 12.515 17.553C12.673 17.682 12.95 17.747 13.342 17.747C13.527 17.747 13.734 17.714 13.968 17.65C14.2 17.586 14.368 17.529 14.474 17.48L14.271 18.307ZM14.137 7.429C13.784 7.757 13.359 7.921 12.862 7.921C12.366 7.921 11.938 7.757 11.582 7.429C11.228 7.101 11.049 6.702 11.049 6.236C11.049 5.771 11.229 5.371 11.582 5.04C11.938 4.708 12.366 4.543 12.862 4.543C13.359 4.543 13.785 4.708 14.137 5.04C14.49 5.371 14.667 5.771 14.667 6.236C14.667 6.703 14.49 7.101 14.137 7.429Z"
      fill="#4E7FCE"
    />
  </svg>
);

export default Connection;
