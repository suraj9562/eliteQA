import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";
import Styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={Styles.container}>
      <DashBoardHeader />
    </div>
  );
}

export default Dashboard;
