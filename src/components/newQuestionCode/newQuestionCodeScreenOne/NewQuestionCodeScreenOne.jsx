import Styles from "./newQuestionCodeScreenOne.module.css";
import easy from "./../../../assets/icons/easy.svg";
import medium from "./../../../assets/icons/medium.svg";
import hard from "./../../../assets/icons/hard.svg";
import tag from "./../../../assets/icons/tag.svg";
import addBlack from "./../../../assets/icons/addBlack.svg";
import Tag from "../../Tests/tag/Tag";
import Select from "../../Tests/select/Select";
import DifButton from "../../Question/button/DifButton";

function NewQuestionCodeScreenOne() {
  const skills = ["UI / UX", "Java", "Testing"];
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.head}>
          <div className={Styles.formItem1}>
            <label htmlFor="type">Question Heading:</label>
            <input type="text" id="type" placeholder="Javascript Question" />
          </div>
          <div className={Styles.formItem2}>
            <label htmlFor="time">Recommended Time</label>
            <input type="text" id="time" placeholder="30 Mins" />
          </div>
        </div>
        <div className={Styles.bottom}>
          <div className={Styles.left}>
            <DifButton data={"Easy"} icon={easy} />
            <DifButton data={"Medium"} icon={medium} />
            <DifButton data={"Hard"} icon={hard} />
          </div>
          <div className={Styles.mid}>
            <div className={Styles.formItem3}>
              <label htmlFor="tags">Tags</label>
              <input type="text" id="tags" placeholder="30 Mins" />
              <img src={tag} alt="" className={Styles.tag} />
            </div>
            <div className={Styles.tags}>
              {skills.map((data, value) => (
                <Tag key={value} data={data} />
              ))}
            </div>
          </div>
          <div className={Styles.right}>
            <div className={Styles.title}>Category</div>
            <div className={Styles.options}>
              <Select data={"Category 1"} />
              <Select data={"Category 2"} />
              <Select data={"Category 3"} />
              <Select data={"Category 4"} />
              <Select data={"Category 5"} />
            </div>
            <DifButton
              data={"Add New"}
              icon={addBlack}
              styles={{ border: "none", paddingLeft: "0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewQuestionCodeScreenOne;
