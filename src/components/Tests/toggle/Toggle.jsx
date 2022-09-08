import React, { useState } from "react";
import Styles from "./toggle.module.css";

function ToggleSwitch({ data }) {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <div className={Styles.container}>
      <label className={Styles.toggleSwitch}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={Styles.switch} />
      </label>
      <span className={Styles.text}>{data}</span>
    </div>
  );
}
export default ToggleSwitch;
