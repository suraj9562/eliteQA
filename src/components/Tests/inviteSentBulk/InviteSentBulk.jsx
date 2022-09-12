import TestHeader from "../testHeader";
import Styles from "./inviteSentBulk.module.css";

import emailSend from "./../../../assets/images/emailSend.svg";
import Button from "../../../subComponents/button/Button";
import { Link } from "react-router-dom";

function InviteSentBulk() {
  return (
    <>
      <TestHeader styles={{ display: "none" }} />
      <div className={Styles.container}>
        <div className={Styles.cardContainer}>
          <div className={Styles.img}>
            <img src={emailSend} alt="" />
          </div>
          <div className={Styles.title}>Invitations Sent!</div>
          <div className={Styles.subtitle}>
            Test invitation is sent to all listed candidates. Get ready to hire
            some best ones!
          </div>
          <Link to="/dashboard" className={Styles.btn}>
            <Button
              data="Back To Dashboard"
              styles={{
                background: "#00C49A",
                maxWidth: "25rem",
                border: "1px solid #00C49A",
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default InviteSentBulk;
