import React from "react";
import "./checkBox.css";

import Check from "../../images/js/Check";

const CheckBox = ({ checked = false, onChange }) => {
  return (
    <div className="appinion-checkbox-root">
      <label htmlFor="appinion-checkbox" className="appinion-checkbox">
        {checked && <Check />}
      </label>
      <input
        id="appinion-checkbox"
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />
    </div>
  );
};

export default CheckBox;
