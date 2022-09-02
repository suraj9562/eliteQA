import Styles from "./deleteModal.module.css";

import trash from "../../../assets/icons/trash.svg";
import plusBlack from "../../../assets/icons/plusBlack.svg";
import Button from "../../../subComponents/button/Button";

function DeleteModal() {
  return (
    <div className={Styles.container}>
      <div className={Styles.modal}>
        <div className={Styles.cross}>
          <img src={plusBlack} alt="" />
        </div>
        <div className={Styles.delIcon}>
          <img src={trash} alt="" />
        </div>
        <div className={Styles.text}>
          Do you want to delete javascript skillset?
        </div>
        <div className={Styles.btnContainer}>
          <Button
            data="Cancel"
            styles={{ background: "#979797", border: "1px solid #979797" }}
          />
          <Button
            data="Delete"
            styles={{ background: "#FC6969", border: "1px solid #FC6969" }}
          />
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
