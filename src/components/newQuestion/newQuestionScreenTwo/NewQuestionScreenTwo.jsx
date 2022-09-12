import DifButton from "../../Question/button/DifButton";
import Styles from "./newQuestionScreenTwo.module.css";

import addBlack from "./../../../assets/icons/addBlack.svg";
import Radio from "./../../Tests/radio/Radio";
import { useState } from "react";

function NewQuestionScreenTwo() {
  const [options, setOptions] = useState([
    "Answer 1 goes here. this is your answer",
    "option2",
    "option 3 ",
    "option 4 ",
  ]);

  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
      </div>
      <div className={Styles.right}>
        <div className={Styles.title}>Select Right Answer</div>
        <div className={Styles.options}>
          {options.map((option) => (
            <Radio data={option} />
          ))}
          <DifButton
            data={"New Field"}
            icon={addBlack}
            styles={{ maxWidth: "25rem", background: "#DDDAD9" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewQuestionScreenTwo;
