import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";
import Tests from "../../components/Tests/Tests";
import Select from "../../subComponents/select/Select";
import Styles from "./dashboard.module.css";

import DashboardHeaderIcon from "./../../assets/icons/dashboardHeaderIcon.svg";

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
              <Select data="Created by" />
              <Select data="Creation Time" />
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
        <div className={Styles.right}>
          <div className={Styles.upper}>
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
            <div className={Styles.grid}>
              <div className={Styles.a}>
                <div className={Styles.img}>
                  <img src={DashboardHeaderIcon} alt="" />
                </div>
                <div className={Styles.cardContent}>
                  <div className={Styles.title}>Invites Used</div>
                  <div className={Styles.subtitle}>534/1000</div>
                </div>
              </div>
              <div className={Styles.b}>
                <div className={Styles.img}>
                  <img src={DashboardHeaderIcon} alt="" />
                </div>
                <div className={Styles.cardContent}>
                  <div className={Styles.title}>students appeared</div>
                  <div className={Styles.subtitle}>745</div>
                </div>
              </div>
              <div className={Styles.c}>
                <div className={Styles.img}>
                  <img src={DashboardHeaderIcon} alt="" />
                </div>
                <div className={Styles.cardContent}>
                  <div className={Styles.title}>students selected</div>
                  <div className={Styles.subtitle}>56</div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.lower}>
            <Tests />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
