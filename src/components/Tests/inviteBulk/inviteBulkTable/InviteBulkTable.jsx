import TestHeader from "../../testHeader";
import Styles from "./inviteBulkTable.module.css";

function InviteBulkTable() {
  return (
    <div>
      <TestHeader styles={{ display: "none" }} />
      <div className={Styles.container}></div>
    </div>
  );
}

export default InviteBulkTable;
