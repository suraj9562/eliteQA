import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";
import Styles from "./profile.module.css";
import Button from "./../../subComponents/button/Button";
import ProfileLeftSideBar from "../../components/profileLeftSideBar/ProfileLeftSideBar";

import userImg from "./../../assets/images/userImg.svg";
import Input from "../../subComponents/input/Input";

function Profile() {
  return (
    <>
      <DashBoardHeader />
      <div className={Styles.container}>
        <div className={Styles.left}>
          <ProfileLeftSideBar />
        </div>
        <div className={Styles.right}>
          <div className={Styles.heading}>Personal Details</div>
          <div className={Styles.userImg}>
            <img src={userImg} alt="" />
          </div>
          <div className={Styles.form}>
            <Input label="Name" placeHolder="Person Name here" />
            <Input label="Username" placeHolder="Username_here" />
            <Input label="Job Title" placeHolder="Hiring Manager" />
            <Input label="Email" placeHolder="billgates@company.com" />
          </div>
          <div className={Styles.btn}>
            <Button
              data="Save"
              styles={{ background: "#00C49A", border: "1px solid #00C49A" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
