import Styles from "./addQuestionModal.module.css";
import arrowLeft from "./../../../assets/icons/arrowLeft.svg";
import DifButton from "../../Question/button/DifButton";
import addBlack from "../../../assets/icons/addBlack.svg";
import Select from "../select/Select";
import Tag from "../tag/Tag";

function AddQuestionModal({ setModal }) {
  const skills = ["UI / UX", "Java", "Testing"];
  return (
    <div className={Styles.container}>
      <div className={Styles.modal}>
        <div className={Styles.header}>
          <img
            src={arrowLeft}
            alt=""
            onClick={() => {
              setModal(false);
            }}
          />
          <span>Back To Test</span>
        </div>
        <div className={Styles.content}>
          <div className={Styles.left}>
            <div className={Styles.Difficulty}>
              <div className={Styles.text}>Add Questions</div>
              <div className={Styles.DifficultyTypeContainer}>
                <Select data={"ElteQA Library"} />
                <Select data={"My Library"} />
                <Select data={"Show Selected"} />
              </div>
            </div>
            <div className={Styles.skills}>
              <div className={Styles.input}>
                <input type="text" placeholder="Search Skills" />
              </div>
              <div className={Styles.tags}>
                {skills.map((data, value) => (
                  <Tag key={value} data={data} />
                ))}
              </div>
            </div>
            <div className={Styles.Difficulty}>
              <div className={Styles.text}>Type</div>
              <div className={Styles.DifficultyTypeContainer}>
                <Select data={"Coding"} />
                <Select data={"MCQ"} />
              </div>
            </div>
            <div className={Styles.Difficulty}>
              <div className={Styles.text}>Difficulty</div>
              <div className={Styles.DifficultyTypeContainer}>
                <Select data={"Easy"} />
                <Select data={"Medium"} />
                <Select data={"Hard"} />
              </div>
            </div>
          </div>
          <div className={Styles.right}>
            <div className={Styles.headerContainer}>
              <div className={Styles.input}>
                <input type="text" placeholder="Search Questions" />
              </div>
              <DifButton
                icon={addBlack}
                data="New Question"
                styles={{
                  maxWidth: "25rem",
                  background: "#F4F9FB",
                  border: "1px dashed #809fb8",
                }}
                textStyle={{ color: "#384455" }}
              />
            </div>
            <div className={Styles.cardsContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestionModal;
