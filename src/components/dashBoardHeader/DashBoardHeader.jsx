import Styles from "./dashBoardHeader.module.css";
import { Link, NavLink } from "react-router-dom";

import DashboardHeaderIcon from "./../../assets/icons/dashboardHeaderIcon.svg";
import Dashboard from "./../../assets/icons/dashboard.svg";
import Notification from "./../../assets/icons/notification.svg";
import Files from "./../../assets/icons/files.svg";
import profileImg from "./../../assets/icons/profileImg.svg";
import dropDown from "./../../assets/icons/dropDown.svg";

function DashBoardHeader() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.logoContainer}>
          <img src={DashboardHeaderIcon} alt="" />
        </div>

        <div className={Styles.searchBox}>
          <input type="text" placeholder="Search Candidate" />
        </div>

        <div className={Styles.linksContainer}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            <div className={Styles.link}>
              <img src={Dashboard} alt="" />
              <span>Dashboard</span>
            </div>
          </NavLink>
          <NavLink
            to="/library"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            <div className={Styles.link}>
              <img src={Files} alt="" />
              <span>Library</span>
            </div>
          </NavLink>
        </div>
      </div>

      <div className={Styles.right}>
        <Link to="/notification">
          <div className={Styles.notification}>
            <img src={Notification} alt="" />
          </div>
        </Link>

        <div className={Styles.profileImg}>
          <Link to="/profile">
            <img src={profileImg} alt="" />
          </Link>
          <div className={Styles.dropdown}>
            <img src={dropDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
