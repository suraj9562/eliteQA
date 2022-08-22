import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";
import NotificationCard from "../../subComponents/notificationCard/NotificationCard";
import Styles from "./library.module.css";



function Library() {
  return (
    <>
      <DashBoardHeader />
      <div className={Styles.container}>
        <div className={Styles.heading}>Notifications (2)</div>
        <NotificationCard />
        <NotificationCard />
      </div>
    </>
  );
}

export default Library;
