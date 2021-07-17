import React, { useState } from "react";
import "../../css/expandTrue/form.css";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("defloas");
  };

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
    </form>
  );
};

export default Form;
