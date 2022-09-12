import React from "react";
import Styles from "./testHeader.module.css";
import companyLogo from "../../assets/icons/companylogo.svg";
import saveIcon from "../../assets/icons/save.svg";
import crossBlack from "../../assets/icons/plusBlack.svg";
const TestHeader = ({ styles }) => {
  return (
    <div className={Styles.container}>
      <img src={companyLogo} alt="" />
      <div className={Styles.buttonContainer}>
        <button style={styles}>
          <img src={saveIcon} alt="" />
          <span>Save As Draft</span>
        </button>
        <span className={Styles.closeButton}>
          <img src={crossBlack} alt="" />
        </span>
      </div>
    </div>
  );
};

export default TestHeader;
