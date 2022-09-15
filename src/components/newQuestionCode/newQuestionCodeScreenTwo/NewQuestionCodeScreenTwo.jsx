import Styles from "./newQuestionCodeScreenTwo.module.css";
import uploadBtn from "./../../../assets/icons/uploadBtn.svg";
import DifButton from "../../Question/button/DifButton";

function NewQuestionCodeScreenTwo() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
        <div className={Styles.footer}>
          <div className={Styles.title}>Domain Checker Settings</div>
          <div className={Styles.btnContainer}>
            <div className={Styles.btn}>
              <p>Time Limit (sec)</p>
              <span>5</span>
            </div>
            <div className={Styles.btn}>
              <p>Maximum size of code (KB)</p>
              <span>1024</span>
            </div>
            <div className={Styles.btn}>
              <p>Memory limit (MB)</p>
              <span>256</span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.header}>
          <div className={Styles.title}>Solution details</div>
          <div className={Styles.subtitle}>
            Sample input, output, and ideal solution must be in the format of
            .txt files up to the size of 5 MB.
          </div>
          <div className={Styles.btnContainer}>
            <div className={Styles.difButton}>
              <img src={uploadBtn} alt="" />
              <span>Sample Input</span>
            </div>
            <div className={Styles.difButton}>
              <img src={uploadBtn} alt="" />
              <span>Sample Output</span>
            </div>
            <div className={Styles.difButton}>
              <img src={uploadBtn} alt="" />
              <span>Ideal Solution</span>
            </div>
          </div>
        </div>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
}

export default NewQuestionCodeScreenTwo;
