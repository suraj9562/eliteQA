import Button from "../../subComponents/button/Button";
import Input from "../../subComponents/input/Input";
import DashBoardHeader from "../dashBoardHeader/DashBoardHeader";
import ProfileLeftSideBar from "../profileLeftSideBar/ProfileLeftSideBar";
import Styles from "./resetPassword.module.css";

function ResetPassword() {
  return (
    <>
      <DashBoardHeader />
      <div className={Styles.container}>
        <div className={Styles.left}>
          <ProfileLeftSideBar />
        </div>
        <div className={Styles.right}>
          <div className={Styles.heading}>Change Password</div>
          <div className={Styles.cPass}>
            <Input label="Current Password" placeHolder="#something1234" />
          </div>
          <div className={Styles.nPass}>
            <Input label="New Password" placeHolder="#something1234" />
            <Input label="Confirm Password" placeHolder="#something1234" />
          </div>
          <div className={Styles.btn}>
            <Button
              data="Change Password"
              styles={{
                background: "#00C49A",
                border: "1px solid #00C49A",
                minWidth: "21rem",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
