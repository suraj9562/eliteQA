import Styles from "./login.module.css";

import loginLogo from "./../../assets/icons/loginLogo.svg";
import Button from "./../../subComponents/button/Button";

function Login() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.logo}>
          <img src={loginLogo} alt="" />
        </div>
        <div className={Styles.header}>
          <div className={Styles.title}>Sign in</div>
          <div className={Styles.subtitle}>
            ipsum, mollis non erat vitae ipsum, mollis{" "}
          </div>
        </div>
        <div className={Styles.form}>
          <div className={Styles.inputItem}>
            <label htmlFor="userName">Username</label>
            <input type="text" name="" id="userName" />
          </div>
          <div className={Styles.inputItem}>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" />
          </div>
          <div className={Styles.checkbox}>
            <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
            <label for="rememberMe">Remember me</label>
          </div>
          <div className={Styles.btn}>
            <Button data="Sign in" styles={{ maxWidth: "100%" }} />
          </div>
          <div className={Styles.forgotPass}>Forgot password?</div>
        </div>
      </div>
      <div className={Styles.right}></div>
    </div>
  );
}

export default Login;
