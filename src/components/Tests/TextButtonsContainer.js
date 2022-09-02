import React, { useState } from "react";
import Styles from "./TextButtonsContainer.module.css";
import Vector from "../../assets/icons/vector.svg";
const TextButtonsContainer = () => {
  const buttons = ["Test Basics", "Summary", "Test", "Settings"];
  const [selectedButton, setselectedButton] = useState(1);
  return (
    <div className={Styles.container}>
      <div>
        {buttons.map((name, index) => {
          return (
            <button>
              <span
                className={selectedButton === index + 1 ? Styles.active : null}
              >
                {index + 1}
              </span>
              <label
                className={
                  selectedButton === index + 1 ? Styles.textActive : null
                }
              >
                {name}
              </label>
            </button>
          );
        })}
      </div>
      <div className={Styles.buttonContainer}>
        <span className={Styles.backButton}>
          <label>Back</label>
          <img src={Vector} alt="" style={{ transform: "rotate(180deg)" }} />
        </span>
        <span className={Styles.nextButton}>
          <label>Next</label>
          <img src={Vector} alt="" />
        </span>
      </div>
    </div>
  );
};

export default TextButtonsContainer;
