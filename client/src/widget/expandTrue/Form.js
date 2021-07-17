import React, { useState } from "react";
import "../../css/expandTrue/form.css";
import TextField from "../TextField/TextField";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="form">
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
    </form>
  );
};

export default Form;
