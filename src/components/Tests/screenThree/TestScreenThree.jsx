import TestHeader from "../testHeader";
import TextButtonsContainer from "../TextButtonsContainer";
import Styles from "./testScreenThree.module.css";

import Tag from "../tag/Tag";
import Select from "../../Tests/select/Select";
import DifButton from "../../Question/button/DifButton";
import addBlack from "../../../assets/icons/addBlack.svg";
import editIconBlack from "../../../assets/icons/editIconBlack.svg";

function TestScreenThree() {
  const skills = ["UI / UX", "Java", "Testing"];

  return (
    <>
      <TestHeader />
      <TextButtonsContainer />
      <div className={Styles.container}>
        <div className={Styles.left}>
          <div className={Styles.skills}>
            <div className={Styles.text}>Skills</div>
            <div className={Styles.tags}>
              {skills.map((data, value) => (
                <Tag key={value} data={data} />
              ))}
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
          <div className={Styles.footer}>
            <div className={Styles.fText}>Total Questions: 4</div>
            <div className={Styles.fText}>Test duration: 75 min</div>
            <div className={Styles.fText}>Total score: 60</div>
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.headingContainer}>
            <div className={Styles.btnContainer}>
              <DifButton
                icon={editIconBlack}
                data="Cutoff: 76"
                styles={{
                  maxWidth: "22rem",
                  background: "#ffffff",
                  border: "1px solid #DDDDDD",
                }}
                textStyle={{ color: "#384455" }}
              />
              <DifButton
                icon={addBlack}
                data="Add Question"
                styles={{
                  maxWidth: "25rem",
                  background: "#F4F9FB",
                  border: "1px dashed #809fb8",
                }}
                textStyle={{ color: "#384455" }}
              />
            </div>
          </div>
          <div className={Styles.mcq}>
            <div className={Styles.text}>MCQ Questions (2)</div>
            <div className={Styles.cardContainer}>cards here...</div>
          </div>
          <div className={Styles.coding}>
            <div className={Styles.text}>Coding Questions (2)</div>
            <div className={Styles.cardContainer}>cards here...</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestScreenThree;
