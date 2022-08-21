import Styles from "./tests.module.css";

import plusIcon from "./../../assets/icons/plusIcon.svg";
import DashboardCard from "../../subComponents/dashboardCard/DashboardCard";

function Tests() {
  return (
    <div className={Styles.container}>
      <div className={Styles.titleContainer}>
        <div className={Styles.input}>
          <input type="text" placeholder="Search Tests" />
        </div>
        <div className={Styles.btn}>
          <div className={Styles.sign}>
            <img src={plusIcon} alt="" />
          </div>
          <div className={Styles.text}>Create New Test</div>
        </div>
      </div>

      <div className={Styles.cardsContainer}>
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
}

export default Tests;
