import DifButton from "../../Question/button/DifButton";
import TestHeader from "../testHeader";
import TextButtonsContainer from "../TextButtonsContainer";
import Styles from "./testScreenTwo.module.css";

import addBlack from "../../../assets/icons/addBlack.svg";
import editIcon from "../../../assets/icons/editIcon.svg";
import deleteIcon from "../../../assets/icons/deleteIcon.svg";
import DeleteModal from "../deleteModal/DeleteModal";

function TestScreenTwo() {
  const data = [
    {
      Skills: "Javascript",
      QuestionType: "Coding",
      DifficultyLevel: "Easy, Medium, Hard",
      Questions: 4,
      Score: 40,
    },
    {
      Skills: "Javascript",
      QuestionType: "Coding",
      DifficultyLevel: "Easy, Medium, Hard",
      Questions: 4,
      Score: 40,
    },
    {
      Skills: "Javascript",
      QuestionType: "Coding",
      DifficultyLevel: "Easy, Medium, Hard",
      Questions: 4,
      Score: 40,
    },
    {
      Skills: "Javascript",
      QuestionType: "Coding",
      DifficultyLevel: "Easy, Medium, Hard",
      Questions: 4,
      Score: 40,
    },
  ];

  return (
    <>
      <DeleteModal />
      <TestHeader />
      <TextButtonsContainer />
      <div className={Styles.tableContainer}>
        <div className={Styles.headingContainer}>
          <div className={Styles.heading}>
            Experience: 0-3 years | Test duration: 75 min | Test Cutoff: 0
          </div>
          <DifButton
            icon={addBlack}
            data="Add Skillset"
            styles={{
              maxWidth: "22rem",
              background: "#F4F9FB",
              border: "1px dashed #809fb8",
            }}
            textStyle={{ color: "#384455" }}
          />
        </div>
        <div className={Styles.table}>
          <table>
            <tr>
              <th>Sr. No.</th>
              <th>Skills</th>
              <th>Question Type</th>
              <th>Difficulty Level</th>
              <th>Questions (16)</th>
              <th>Score (40)</th>
              <th>Edit</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{val.Skills}</td>
                  <td>{val.QuestionType}</td>
                  <td>{val.DifficultyLevel}</td>
                  <td>{val.Questions}</td>
                  <td>{val.Score}</td>
                  <td>
                    <div className={Styles.btnContainer}>
                      <div className={Styles.icon}>
                        <img src={editIcon} alt="" />
                      </div>
                      <div className={Styles.icon}>
                        <img src={deleteIcon} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default TestScreenTwo;
