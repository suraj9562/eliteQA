import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";
import Select from "../../subComponents/select/Select";
import Styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={Styles.container}>
      <DashBoardHeader />
      <div className={Styles.content}>
        <div className={Styles.left}>
          <div className={Styles.sidebar}>
            <div className={Styles.upper}>
              <div className={Styles.title}>Test Status</div>
              <div className={Styles.options}>
                <div className={Styles.option}>
                  <input type="checkbox" value="lsOngoing" id="lsOngoing" />{" "}
                  <label htmlFor="lsOngoing">Ongoing (12)</label>
                </div>
                <div className={Styles.option}>
                  <input type="checkbox" value="lsCompleted" id="lsCompleted" />{" "}
                  <label htmlFor="lsCompleted">Completed (13)</label>
                </div>
                <div className={Styles.option}>
                  <input type="checkbox" value="lsDraft" id="lsDraft" />{" "}
                  <label htmlFor="lsDraft">Draft (3)</label>
                </div>
              </div>
            </div>
            <div className={Styles.mid}>
              <Select />
              <Select />
            </div>
            <div className={Styles.lower}>
              <div className={Styles.title}>Test Type</div>
              <div className={Styles.options}>
                <div className={Styles.option}>
                  <input type="checkbox" value="lsPublic" id="lsPublic" />{" "}
                  <label htmlFor="lsPublic">Public</label>
                </div>
                <div className={Styles.option}>
                  <input type="checkbox" value="lsPrivate" id="lsPrivate" />{" "}
                  <label htmlFor="lsPrivate">Private</label>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.calender}></div>
        </div>
        <div className={Styles.right}></div>
      </div>
    </div>
  );
}

export default Dashboard;
