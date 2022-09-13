import Select from "../../../subComponents/select/Select";
import DifButton from "../../Question/button/DifButton";
import TestHeader from "../testHeader";
import Styles from "./published.module.css";

import userBlack from "./../../../assets/icons/userBlack.svg";
import mail from "./../../../assets/icons/mail.svg";

function Published() {
  return (
    <>
      <TestHeader styles={{ display: "none" }} />
      <div className={Styles.container}>
        <div className={Styles.left}>
          <div className={Styles.title}>Test Published!</div>
          <div className={Styles.subtitle}>
            Copy your Test URL to share with candidates . Set invite only to
            restrict the access
          </div>
          <div className={Styles.link}>
            https://theeliteqa/tests/test-id-123455
            <div className={Styles.copy}>Copy Link</div>
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.form}>
            <div className={Styles.header}>Invite Candidates</div>
            <div className={Styles.body}>
              <div className={Styles.formItem1}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Himanshu Patil" />
                <img src={userBlack} alt="" className={Styles.overlay} />
              </div>
              <div className={Styles.formItem1}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="abc@gmail.com" />
                <img src={mail} alt="" className={Styles.overlay} />
              </div>
              <div style={{ width: "45%" }}>
                <Select data={"5 Days"} />
              </div>
              <DifButton
                data={"Invite Candidate"}
                styles={{ background: "#FF6812", maxWidth: "45rem" }}
                textStyle={{ color: "#FFFFFF" }}
              />
              <div
                style={{
                  margin: "auto",
                  fontWeight: "500",
                  fontSize: "2.3rem",
                  lineHeight: "2.7rem",
                  color: "#000000",
                }}
              >
                OR
              </div>
              <div style={{ margin: "auto" }}>
                <DifButton
                  data={"Invite In Bulk"}
                  styles={{
                    border: "1px dashed #809FB8",
                    background: "#F4F9FB",
                    maxWidth: "30rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Published;
