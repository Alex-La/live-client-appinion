import React, { useState } from "react";
import "../../css/expandTrue/form.css";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import CheckBox from "../../components/CheckBox/CheckBox";

const Form = ({ form, setForm, handleSubmit, color }) => {
  const [check, setCheck] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleChecked = (e) => setCheck(e.target.checked);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        name={"name"}
        onChange={handleChange}
        value={form.name}
        label="Ваше имя"
        style={{ "--color": color }}
      />
      <TextField
        name={"email"}
        onChange={handleChange}
        value={form.email}
        label="E-mail"
        style={{ marginTop: 10, "--color": color }}
      />

      <Button type="submit" style={{ marginTop: 20 }} color={color}>
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
