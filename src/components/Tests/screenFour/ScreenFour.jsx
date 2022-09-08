import Select from "../../../subComponents/select/Select";
import DifButton from "../../Question/button/DifButton";
import TestHeader from "../testHeader";
import TextButtonsContainer from "../TextButtonsContainer";
import Styles from "./screenFour.module.css";

import plus from "./../../../assets/icons/plusIcon.svg";
import Tag from "../tag/Tag";
import alert from "./../../../assets/icons/alertcircle.svg";
import Radio from "../radio/Radio";
import ToggleSwitch from "../toggle/Toggle";

function ScreenFour() {
  const skills = ["UI / UX", "Java", "Testing"];
  return (
    <div>
      <TestHeader />
      <TextButtonsContainer />
      <div className={Styles.container}>
        <div className={Styles.left}>
          <div className={Styles.top}>
            <div className={Styles.title}>Candidate Data to be collected</div>
            <div className={Styles.mid}>
              <Select data={"Select"} />
              <DifButton
                icon={plus}
                data="Create Custom"
                styles={{
                  border: "1px dashed #809FB8",
                  background: "rgba(254, 233, 225, 0.54)",
                  maxWidth: "40rem",
                }}
                textStyle={{
                  fontFamily: "Nunito",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  lineHeight: "2.2rem",
                  color: "#384455",
                }}
              />
            </div>
            <div className={Styles.tags}>
              {skills.map((data, value) => (
                <Tag key={value} data={data} />
              ))}
            </div>
          </div>
          <div className={Styles.midContainer}>
            <div className={Styles.title}>Proctoring Settings</div>
            <div className={Styles.content}>
              <ToggleSwitch data="Shuffle Questions for each candidate" />
              <ToggleSwitch data="Take Snapshots via webcam every 30 second" />
              <ToggleSwitch data="Turn on fullscreen while test" />
              <ToggleSwitch data="Turn Off copy paste from externa; sources" />
              <ToggleSwitch data="Logout on leaving a test interface" />
            </div>
          </div>
          <div className={Styles.bottomContainer}>
            <div className={Styles.title}>
              <span>Test Type</span>
              <img src={alert} alt="" />
            </div>
            <div className={Styles.btnContainer}>
              <Radio data={"Public"} />
              <Radio data={"Invite Only"} />
            </div>
          </div>
        </div>
        <div className={Styles.right}></div>
      </div>
    </div>
  );
}

export default ScreenFour;
