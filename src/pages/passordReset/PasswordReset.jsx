import Styles from "./../login/login.module.css";

import loginLogo from "./../../assets/icons/loginLogo.svg";
import Button from "./../../subComponents/button/Button";

function PasswordReset() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.logo}>
          <img src={loginLogo} alt="" />
        </div>
        <div className={Styles.header}>
          <div className={Styles.title}>Let’s reset password</div>
          <div className={Styles.subtitle}>
            We will send reset link to the following email{" "}
          </div>
        </div>
        <div className={Styles.form}>
          <div className={Styles.inputItem}>
            <label htmlFor="userName">Email</label>
            <input type="email" name="" id="userName" />
          </div>

          <div className={Styles.btn}>
            <Button data="Send Reset Link" styles={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>
      <div className={Styles.right}></div>
    </div>
  );
}

export default PasswordReset;
