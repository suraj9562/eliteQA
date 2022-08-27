import QuestionHeader from "../questionHeader/QuestionHeader";
import Styles from "./bulkquestion.module.css";

import uploadBtn from "./../../../assets/icons/uploadBtn.svg";
import Button from "../../../subComponents/button/Button";

function BulkQuestion() {
  return (
    <>
      <QuestionHeader />
      <div className={Styles.container}>
        <div
          className={Styles.input}
          onClick={() => {
            document.getElementById("input").click();
          }}
        >
          <div className={Styles.btnContainer}>
            <img src={uploadBtn} alt="" />
            <span>Upload File or drag and drop here</span>
          </div>
        </div>
        <input type="file" style={{ display: "none" }} id="input" />
        <div className={Styles.instructions}>
          <div className={Styles.header}>
            <div className={Styles.title}>
              Guidelines for uploading Multiple Choice Questions (MCQs).
            </div>
            <Button
              data="Download Sample File"
              styles={{
                background: "#00C49A",
                minWidth: "25rem",
                border: "1px solid #00C49A",
              }}
            />
          </div>
          <div className={Styles.list}>
            <div className={Styles.listItem}>
              1. Only .xls and .xlsx formats are supported for bulk upload.
            </div>
            <div className={Styles.listItem}>
              2. Only the first sheet of the Excel file will be considered for bulk upload.
            </div>
            <div className={Styles.listItem}>
              3. You must create a section in the library and enter the same name in the Section name column.
            </div>
            <div className={Styles.listItem}>
              4. Do not remove or change the header row, however, to add more than 4 options for an Multiple choice, create a column next to Option 4 with the header in the same format
            </div>
            <div className={Styles.listItem}>
              5. In the Options field, if a number in an option ends with 0 after the decimal point such as 1.0 and 20.0, then change the format of the field to 'text' in the Excel sheet.
            </div>
            <div className={Styles.listItem}>
              6. Multiple skills or topics should be separated using commas and cannot be named 'dummy'. Use valid names such as Java, Python, etc.
            </div>
            <div className={Styles.listItem}>
              7. If there are multiple correct options to a question, you can add the options in the Correct options column by separating them with 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BulkQuestion;
