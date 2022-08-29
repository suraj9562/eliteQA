import Styles from "./notification.module.css";
import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";
import NotificationCard from "../../subComponents/notificationCard/NotificationCard";

function Notification() {
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

export default Notification;
