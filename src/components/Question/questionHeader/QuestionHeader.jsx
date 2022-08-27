import Styles from "./questionHeader.module.css";
import { Link } from "react-router-dom";

import DashboardHeaderIcon from "./../../../assets/icons/dashboardHeaderIcon.svg";
import chevronLeft from "./../../../assets/icons/chevronLeft.svg";

function QuestionHeader() {
  return (
    <div className={Styles.container}>
      <div className={Styles.logoContainer}>
        <div className={Styles.logo}>
          <img src={DashboardHeaderIcon} alt="" />
        </div>
        <span className={Styles.text}>Bulk MCQ</span>
      </div>
      <Link to="/dashboard" className={Styles.button}>
        <span>
          <img src={chevronLeft} alt="" />
        </span>
        <span>Back To Dashboard</span>
      </Link>
    </div>
  );
}

export default QuestionHeader;
