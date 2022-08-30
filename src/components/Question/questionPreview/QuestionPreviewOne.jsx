import DifButton from "../button/DifButton";
import Styles from "./questionPreview.module.css";

import easyFire from "./../../../assets/icons/easyFire.svg";
import edit from "./../../../assets/icons/edit.svg";
import crossBlack from "./../../../assets/icons/crossBlack.svg";
import DashBoardHeader from "../../dashBoardHeader/DashBoardHeader";

function QuestionPreviewOne() {
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
                Suspendisse ullamcorper dapibus sapien sit amet eleifend.{" "}
              </p>
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Fusce eu interdum mauris. Aliquam sapien nisl, posuere non
                rhoncus et, viverra et nulla.Vivamus faucibus dapibus lacus ac
                blandit. Donec porta finibus pharetra Vestibulum.
              </p>
              <p>
                ante ipsum primis in faucibus orci luctus et ultrices posuere{" "}
                <span className={Styles.readMore}>...read more</span>
              </p>
            </div>
          </div>
          <div className={Styles.options}></div>
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

export default QuestionPreviewOne;
