import Styles from "./notificationCard.module.css";

import cross from "./../../assets/icons/cross.svg";

function NotificationCard() {
  return (
    <div className={Styles.card}>
      <div className={Styles.headerContainer}>
        <div className={Styles.date}>27 june 2022</div>
        <div className={Styles.cancel}>
          <img src={cross} alt="" />
        </div>
      </div>

      <div className={Styles.title}>Introducing New Feature</div>
      <div className={Styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amen
      </div>
      <div className={Styles.img}></div>
    </div>
  );
}

export default NotificationCard;
