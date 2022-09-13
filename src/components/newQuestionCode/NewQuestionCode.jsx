import { useState } from "react";
import TestHeader from "../Tests/testHeader";
import Styles from "./newQuestionCode.module.css";
import NewQuestionCodeScreenOne from "./newQuestionCodeScreenOne/NewQuestionCodeScreenOne";
import NewQuestionCodeScreenThree from "./newQuestionCodeScreenThree/NewQuestionCodeScreenThree";
import NewQuestionCodeScreenTwo from "./newQuestionCodeScreenTwo/NewQuestionCodeScreenTwo";
import Vector from "../../assets/icons/vector.svg";
function NewQuestionCode() {
  const options = ["Basic Details", "Create Question", "Test Cases & Langs"];
  const [isActive, setIsActive] = useState(0);
  return (
    <div>
      <TestHeader styles={{ display: "none" }} />
      <div className={Styles.container}>
        <div className={Styles.header}>
          <div className={Styles.left}>
            {options.map((option, value) => (
              <div
                className={`${
                  value === isActive
                    ? ` ${Styles.navItem} ${Styles.active}`
                    : Styles.navItem
                }`}
                key={value}
              >
                <div className={Styles.index}>{value + 1}</div>
                <div className={Styles.data}>{option}</div>
              </div>
            ))}
          </div>
          <div className={Styles.buttonContainer}>
            <span
              className={Styles.backButton}
              onClick={() => {
                setIsActive(isActive - 1);
              }}
              style={isActive === 0 ? { display: "none" } : { display: "flex" }}
            >
              <label>Back</label>
              <img
                src={Vector}
                alt=""
                style={{ transform: "rotate(180deg)" }}
              />
            </span>
            <span
              className={Styles.nextButton}
              onClick={() => {
                setIsActive(isActive + 1);
              }}
            >
              <label>{isActive === options.length - 1 ? "Done" : "Next"}</label>
              <img
                src={Vector}
                alt=""
                style={
                  isActive === options.length - 1
                    ? { display: "none" }
                    : { display: "flex" }
                }
              />
            </span>
          </div>
        </div>
        {isActive === 0 && <NewQuestionCodeScreenOne />}
        {isActive === 1 && <NewQuestionCodeScreenTwo />}
        {isActive === 2 && <NewQuestionCodeScreenThree />}
      </div>
    </div>
  );
}

export default NewQuestionCode;
