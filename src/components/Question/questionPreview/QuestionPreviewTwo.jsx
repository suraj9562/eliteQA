import DifButton from "../button/DifButton";
import Styles from "./questionPreview.module.css";

import easyFire from "./../../../assets/icons/easyFire.svg";
import documentBlack from "./../../../assets/icons/documentBlack.svg";
import edit from "./../../../assets/icons/edit.svg";
import crossBlack from "./../../../assets/icons/crossBlack.svg";
import DashBoardHeader from "../../dashBoardHeader/DashBoardHeader";

function QuestionPreviewTwo() {
  const code =
    '<script type="module" src="new_tab_page.js"></script><link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css"><link rel="stylesheet" href="shared_vars.css"></link>';

  return (
    <>
      <DashBoardHeader />
      <div className={Styles.container}>
        <div className={Styles.modal}>
          <div className={Styles.header}>
            <div className={Styles.subject}>Javascript Question</div>
            <DifButton
              data="Easy"
              styles={{ border: "1px solid #00C49A" }}
              icon={easyFire}
            />
            <DifButton data="Coding" />
          </div>
          <div className={Styles.question}>
            <div className={Styles.title}>Problem</div>
            <div className={Styles.desc}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ullamcorper dapibus
              </p>
              <p>{code}</p>
              <p>
                ante ipsum primis in faucibus orci luctus et ultrices posuere{" "}
                <span className={Styles.readMore}>...read more</span>
              </p>
            </div>
          </div>
          <div className={Styles.mid}>
            <div className={Styles.title}>Solution Details</div>
            <div className={Styles.grid}>
              <DifButton
                icon={documentBlack}
                data="Input.txt"
                styles={{
                  background: "#F4F9FB",
                  border: "1px dashed #809fb8",
                }}
                textStyle={{ color: "#384455" }}
              />
              <DifButton
                icon={documentBlack}
                data="Output.txt"
                styles={{
                  background: "#F4F9FB",
                  border: "1px dashed #809fb8",
                }}
                textStyle={{ color: "#384455" }}
              />
              <DifButton
                icon={documentBlack}
                data="Solution.txt"
                styles={{
                  maxWidth: "22rem",
                  background: "#F4F9FB",
                  border: "1px dashed #809fb8",
                }}
                textStyle={{ color: "#384455" }}
              />
            </div>
          </div>
          <div className={Styles.bottom}>
            <div className={Styles.title}>Allowed Languages</div>
          </div>
          <div className={Styles.btn}>
            <DifButton
              data="Edit"
              styles={{ background: "#2A2C2B" }}
              textStyle={{
                fontWeight: "500",
                fontSize: "2rem",
                lineHeight: "2.3rem",
                color: "#FFFFFF",
              }}
              icon={edit}
            />
          </div>
        </div>
        <div className={Styles.cross}>
          <img src={crossBlack} alt="" />
        </div>
      </div>
    </>
  );
}

export default QuestionPreviewTwo;
