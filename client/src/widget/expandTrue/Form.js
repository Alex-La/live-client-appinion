import React, { useState, useContext } from "react";
import "../../css/expandTrue/form.css";

import ControlContext from "../../context/ControlContext";

import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import CheckBox from "../../components/CheckBox/CheckBox";
import Text from "../../components/Text/Text";

const Form = ({ form, setForm, handleSubmit }) => {
  const { data } = useContext(ControlContext);

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
        style={{ "--color": data.mainColor }}
      />
      <TextField
        name={"email"}
        onChange={handleChange}
        value={form.email}
        label="E-mail"
        style={{ marginTop: 10, "--color": data.mainColor }}
      />

      <Button
        disabled={!check}
        type="submit"
        style={{ marginTop: 20 }}
        color={data.mainColor}
      >
        Продолжить
      </Button>

      <div className="agreement">
        <CheckBox
          checked={check}
          onChange={handleChecked}
          color={data.mainColor}
        />
        <Text size={"12px"} lineHeight={"18px"} color={"#999999"}>
          Нажимая кнопку “Продолжить”, я даю согласие на обработку персональных
          данных и ознакомлением с политикой конфиденциальности.
        </Text>
      </div>
    </form>
  );
};

export default Form;
