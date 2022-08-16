import Button from "../../subComponents/button/Button";
import Styles from "./createNewPassword.module.css";

import loginLogo from "./../../assets/icons/loginLogo.svg";

function CreateNewPassword() {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <img src={loginLogo} alt="" />
      </div>
      <div className={Styles.content}>
        <div className={Styles.header}>
          <div className={Styles.title}>Create New password</div>
          <div className={Styles.subtitle}>
            Create a strong password for better security{" "}
          </div>
        </div>
        <div className={Styles.form}>
          <div className={Styles.inputItem}>
            <label htmlFor="newPass">New Password</label>
            <input type="password" name="" id="newPass" />
          </div>
          <div className={Styles.inputItem}>
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input type="password" name="" id="confirmPassword" />
          </div>
          <div className={Styles.btn}>
            <Button data="Confirm" styles={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
