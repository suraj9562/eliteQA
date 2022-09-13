import TestHeader from "../../testHeader";
import Styles from "./inviteBulkTable.module.css";

import Select from "../../../../subComponents/select/Select";
import editIcon from "../../../../assets/icons/editIcon.svg";
import deleteIcon from "../../../../assets/icons/deleteIcon.svg";
import DifButton from "../../../Question/button/DifButton";

function InviteBulkTable() {
  const data = [
    {
      CandidateName: "Himanshu Patil",
      EmailID: "abc@gmail.com",
    },
    {
      CandidateName: "Himanshu Patil",
      EmailID: "abc@gmail.com",
    },
    {
      CandidateName: "Himanshu Patil",
      EmailID: "abc@gmail.com",
    },
    {
      CandidateName: "Himanshu Patil",
      EmailID: "abc@gmail.com",
    },
  ];

  return (
    <div>
      <TestHeader styles={{ display: "none" }} />
      <div className={Styles.tableContainer}>
        <div className={Styles.headingContainer}>
          <div className={Styles.heading}>Imported Candidates (34)</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <DifButton
              data="Discard"
              styles={{
                maxWidth: "25rem",
                background: "#999999",
              }}
              textStyle={{ color: "#FFFFFF" }}
            />
            <Select data={"Validity"} />
            <DifButton
              data="Sent Invitation"
              styles={{
                maxWidth: "25rem",
                background: "#00C49A",
              }}
              textStyle={{ color: "#FFFFFF" }}
            />
          </div>
        </div>
        <div className={Styles.table}>
          <table>
            <tr>
              <th>Sr. No.</th>
              <th>CandidateName</th>
              <th>Email</th>
              <th>Edit</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{val.CandidateName}</td>
                  <td>{val.EmailID}</td>
                  <td>
                    <div className={Styles.btnContainer}>
                      <div className={Styles.icon}>
                        <img src={editIcon} alt="" />
                        <span>Edit</span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default InviteBulkTable;
