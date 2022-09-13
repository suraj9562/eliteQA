import { useState } from "react";
import TestHeader from "../../testHeader";
import Styles from "./inviteBulkUpload.module.css";

import uploadBtn from "./../../../../assets/icons/uploadBtn.svg";
import Button from "../../../../subComponents/button/Button";

function InviteBulkUpload() {
  const [file, setFile] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <TestHeader styles={{ display: "none" }} />
      <div className={Styles.container}>
        <div
          className={Styles.input}
          onClick={() => {
            document.getElementById("input").click();
          }}
        >
          {file === "" ? (
            <div className={Styles.btnContainer}>
              <img src={uploadBtn} alt="" />
              <span>Upload File or drag and drop here</span>
            </div>
          ) : (
            <div className={Styles.selected}>
              <div className={Styles.text}>{text}</div>
              <Button
                data="Confirm"
                styles={{
                  background: "#00C49A",
                  border: "1px solid #00C49A",
                }}
              />
            </div>
          )}
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          id="input"
          value={file}
          onChange={(e) => {
            setText(e.target.files[0].name);
            setFile(e.target.value);
          }}
        />
        <div className={Styles.instructions}>
          <div className={Styles.header}>
            <div className={Styles.title}>
              File Must be in .xlxs format. Download Sample File
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
        </div>
      </div>
    </div>
  );
}

export default InviteBulkUpload;
