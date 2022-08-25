import Styles from "./input.module.css";

import userBlack from "./../../assets/icons/userBlack.svg";

function Input({ label, placeHolder }) {
  return (
    <div className={Styles.input}>
      <label htmlFor="name">{label}</label>
      <input type="text" placeholder={placeHolder} id="name" />
      <div className={Styles.img}>
        <img src={userBlack} alt="" />
      </div>
    </div>
  );
}

export default Input;
