import Styles from "./trendingUpIcon.module.css";

import userPlus from "./../../assets/icons/userPlus.svg";
function UserPlusIcon() {
  return (
    <div className={Styles.container}>
      <img src={userPlus} alt="" />
    </div>
  );
}

export default UserPlusIcon;
