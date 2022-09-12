import Styles from "./newQuestion.module.css";
import { Outlet } from "react-router-dom";
import TestHeader from "../Tests/testHeader";
import NewQuestionScreenOne from "./newQuestionScreenOne/NewQuestionScreenOne";
import Vector from "../../assets/icons/vector.svg";
import NewQuestionScreenTwo from "./newQuestionScreenTwo/NewQuestionScreenTwo";
import { useState } from "react";

function NewQuestion() {
  const options = ["Basic Details", "Create Question"];

  const [isActive, setIsActive] = useState(0);

  return (
    <>
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
        {isActive === 0 && <NewQuestionScreenOne />}
        {isActive === 1 && <NewQuestionScreenTwo />}
      </div>
      <Outlet />
    </>
  );
}

export default NewQuestion;
