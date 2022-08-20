import Styles from "./dashBoardHeader.module.css";

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
          <div className={Styles.link}>
            <img src={Dashboard} alt="" />
            <span>Dashboard</span>
          </div>
          <div className={Styles.link}>
            <img src={Files} alt="" />
            <span>Notifications</span>
          </div>
        </div>
      </div>

      <div className={Styles.right}>
        <div className={Styles.notification}>
          <img src={Notification} alt="" />
        </div>

        <div className={Styles.profileImg}>
          <img src={profileImg} alt="" />
          <div className={Styles.dropdown}>
            <img src={dropDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;