import React, { useState } from "react";
import "../../css/expandTrue/form.css";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import CheckBox from "../../components/CheckBox/CheckBox";

const Form = ({ setStartLive }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [check, setCheck] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("defloas");
    setStartLive(true);
  };

  const handleChecked = (e) => setCheck(e.target.checked);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        name={"name"}
        onChange={handleChange}
        value={form.name}
        label="Ваше имя"
      />
      <TextField
        name={"email"}
        onChange={handleChange}
        value={form.email}
        label="E-mail"
        style={{ marginTop: 10 }}
      />

      <Button type="submit" style={{ marginTop: 20 }}>
        Продолжить
      </Button>

      <div className="agreement">
        <CheckBox checked={check} onChange={handleChecked} />
        <p>
          Нажимая кнопку “Продолжить”, я даю согласие на обработку персональных
          данных и ознакомлением с политикой конфиденциальности.
        </p>
      </div>
    </form>
  );
};

export default Form;
