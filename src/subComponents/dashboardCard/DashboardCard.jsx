import Styles from "./dashboardCard.module.css";

import Document from "./../../assets/icons/Document.svg";
import EyeIcon from "../../subComponents/eyeIcon/EyeIcon";
import TrendingUpIcon from "../../subComponents/customizedIcons/TrendingUpIcon";
import clock from "./../../assets/icons/clock.svg";
import menuVertical from "./../../assets/icons/menuVertical.svg";

function DashboardCard() {
  return (
    <div className={Styles.card}>
      <div className={Styles.header}>
        <div className={Styles.status}>
          <div className={Styles.content}>Ongoing</div>
          <div className={Styles.icon}>
            <img src={Document} alt="" />
          </div>
        </div>
        <div className={Styles.menu}>
          <img src={menuVertical} alt="" />
        </div>
      </div>
      <div className={Styles.name}>Javascript Loops Test</div>
      <div className={Styles.desc}>
        12 candidates have been invited and have taken the test.{" "}
        <span>View candidate report</span>
      </div>
      <div className={Styles.footer}>
        <div className={Styles.left}>
          <div className={Styles.time}>
            <img src={clock} alt="" /> <span>30 mins</span>
          </div>
          <div className={Styles.type}>
            <img src={clock} alt="" /> <span>Invite Only</span>
          </div>
          <div className={Styles.timestamp}>
            <img src={clock} alt="" /> <span>27 Aug 2022- 29 Aug 2022</span>
          </div>
        </div>
        <div className={Styles.right}>
          <EyeIcon />
          <TrendingUpIcon />
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
