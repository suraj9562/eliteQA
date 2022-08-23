import Button from "../../subComponents/button/Button";
import Styles from "./profileLeftSideBar.module.css";

import DashboardHeaderIcon from "./../../assets/icons/dashboardHeaderIcon.svg";
import userBlack from "./../../assets/icons/userBlack.svg";
import lock from "./../../assets/icons/lock.svg";
import logOut from "./../../assets/icons/logOut.svg";
import { Link, NavLink } from "react-router-dom";

function ProfileLeftSideBar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.navbarCard}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? Styles.active : "")}
        >
          <div className={Styles.link}>
            <img src={userBlack} alt="" />
            <span>Personal Profile</span>
          </div>
        </NavLink>

        <NavLink
          to="/password"
          className={({ isActive }) => (isActive ? Styles.active : "")}
        >
          <div className={Styles.link}>
            <img src={lock} alt="" />
            <span>Password</span>
          </div>
        </NavLink>
        <Link onClick={()=>localStorage.clear()} to="/">
          <div className={Styles.link}>
            <img src={logOut} alt="" />
            <span className={Styles.logOut}>Log Out</span>
          </div>
        </Link>
      </div>
      <div className={Styles.card}>
        <div className={Styles.background}>
          <div className={Styles.img}>
            <img src={DashboardHeaderIcon} alt="" />
          </div>
        </div>
        <div className={Styles.cardContent}>
          <div className={Styles.title}>Company</div>
          <div className={Styles.subtitle}>54 Assesments Created</div>
        </div>
      </div>
      <div className={Styles.contactCard}>
        <div className={Styles.title}>Reach Out To Us!</div>
        <div className={Styles.subtitle}>
          Any doubt? Problem? feel free to drop a support request
        </div>
        <div className={Styles.btn}>
          <Button data="Support" />
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftSideBar;
