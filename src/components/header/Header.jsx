import Styles from "./header.module.css";
import logo from "./../../assets/icons/logo.svg";

function Header() {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={Styles.links}>
        <div className={Styles.active}>Home</div>
        <div className={Styles.link}>Pricing</div>
        <div className={Styles.link}>About</div>
        <div className={Styles.link}>Login</div>
      </div>
    </div>
  );
}

export default Header;
