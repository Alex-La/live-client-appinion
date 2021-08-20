import "./checkBox.css";

import Check from "../../images/js/Check";

const CheckBox = ({ checked = true, onChange, color }) => {
  return (
    <div className="appinion-checkbox-root">
      <label htmlFor="appinion-checkbox" className="appinion-checkbox">
        {checked && <Check color={color} />}
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
