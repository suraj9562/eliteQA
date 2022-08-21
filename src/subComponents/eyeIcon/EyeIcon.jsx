import Styles from "./eyeIcon.module.css";

import eye from "./../../assets/icons/eye.svg"

function EyeIcon() {
  return <div className={Styles.container}>
    <img src={eye} alt="" />
  </div>;
}

export default EyeIcon;
