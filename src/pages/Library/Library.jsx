import DashBoardHeader from "../../components/dashBoardHeader/DashBoardHeader";

import Styles from "./library.module.css";
import plusIcon from "./../../assets/icons/plusIcon.svg";
import uploadBtn from "./../../assets/icons/uploadBtn.svg";

function Library() {
  return (
    <>
      <DashBoardHeader />
      <div className={Styles.content}>
        <div className={Styles.left}>
          <div className={Styles.card}>
            <div className={Styles.title}>Source</div>
            <div className={Styles.options}>
              <div className={Styles.option}>
                <input type="checkbox" value="lsPublic" id="lsPublic" />{" "}
                <label htmlFor="lsPublic">ElteQA Library</label>
              </div>
              <div className={Styles.option}>
                <input type="checkbox" value="lsPrivate" id="lsPrivate" />{" "}
                <label htmlFor="lsPrivate">My Library</label>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.header}>
            <div className={Styles.titleContainer}>
              <div className={Styles.title}>My Library</div>
              <div className={Styles.subTitle}>
                Your Question library is empty. Click to create question
              </div>
            </div>
            <div className={Styles.btn} style={{ background: "#F4F9FB" }}>
              <div className={Styles.sign}>
                <img src={uploadBtn} alt="" />
              </div>
              <div className={Styles.text}>Upload MCQ bulk</div>
            </div>
          </div>
          <div className={Styles.container}>
            <div className={Styles.btn}>
              <div className={Styles.sign}>
                <img src={plusIcon} alt="" />
              </div>
              <div className={Styles.text}>New Question</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
