import Styles from "./trendingUpIcon.module.css";

import trendingUp from "./../../assets/icons/trendingUp.svg";

function TrendingUpIcon() {
  return (
    <div className={Styles.container}>
      <img src={trendingUp} alt="" />
    </div>
  );
}

export default TrendingUpIcon;
