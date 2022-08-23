import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";
import Styles from "./profile.module.css";
import Button from "./../../subComponents/button/Button";
import ProfileLeftSideBar from "../../components/profileLeftSideBar/ProfileLeftSideBar";



function Profile() {
  return (
    <>
      <DashBoardHeader />
      <div className={Styles.container}>
        <div className={Styles.left}>
          <ProfileLeftSideBar />
        </div>
        <div className={Styles.right}></div>
      </div>
    </>
  );
}

export default Profile;
