import Styles from "./questionTypeModal.module.css";

import crossIcon from "./../../../assets/icons/plusBlack.svg";
import code from "./../../../assets/icons/code.svg";
import list from "./../../../assets/icons/list.svg";

function QuestionTypeModal({ setModal }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.modal}>
        <div className={Styles.header}>
          <div className={Styles.title}>Choose Question Type</div>
          <div
            className={Styles.cross}
            onClick={() => {
              setModal(false);
            }}
          >
            <img src={crossIcon} alt="" />
          </div>
        </div>
        <div className={Styles.content}>
          <div className={Styles.card}>
            <div className={Styles.img} style={{ background: "#fee9e1" }}>
              <img src={code} alt="" />
            </div>
            <div className={Styles.text}>CODE</div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.img} style={{ background: "#00C49A" }}>
              <img src={list} alt="" />
            </div>
            <div className={Styles.text}>MCQ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionTypeModal;
