import { useState } from "react";
import Styles from "./radio.module.css";

function Radio({ data }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={Styles.container}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <div className={`${Styles.circle} ${selected && `${Styles.active}`}`}>
        <div className={Styles.smallCircle}></div>
      </div>
      <div className={Styles.text}>{data}</div>
    </div>
  );
}

export default Radio;
