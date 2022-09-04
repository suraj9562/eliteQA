import Styles from "./select.module.css";

import { useState } from "react";
import checkIcon from "../../../assets/icons/check.svg";

function Select({ data }) {
  const [check, setCheck] = useState(true);
  return (
    <div className={Styles.container}>
      <div
        style={
          check
            ? {
                backgroundColor: "#FF6812",
                borderColor: "#FF6812",
                borderWidth: 1,
                borderRadius: 5,
              }
            : { backgroundColor: "white" }
        }
        onClick={() => setCheck(!check)}
        className={Styles.checkbox_input}
      >
        {check && <img src={checkIcon} alt="selected" />}
      </div>
      {data}
    </div>
  );
}

export default Select;
