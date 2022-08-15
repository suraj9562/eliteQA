import Styles from "./intro.module.css";
import Button from "../../subComponents/button/Button";

import clientImage from "./../../assets/images/homeClient.svg";
import firstOverLayImage from "./../../assets/images/Group_47886.svg";
import secondOverLayImage from "./../../assets/images/Group_47878.svg";
import thirdOverLayImage from "./../../assets/icons/HomeDots.svg";
import video from "./../../assets/images/video.svg";
import Grid from "../../subComponents/iconsGrid/Grid";

function Intro() {
  return (
    <div className={Styles.container}>
      <div className={Styles.firstContainer}>
        <div className={Styles.left}>
          <div className={Styles.intro}>
            <div className={Styles.dash}></div>
            <div className={Styles.text}>Introducing EQA</div>
          </div>
          <div className={Styles.title}>
            Hiring <span>best talent</span> is more than Easy!
          </div>
          <div className={Styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dignissim lectus ut risus
          </div>
          <div className={Styles.btnContainer}>
            <div>
              <Button data="Get Demo" />
            </div>
            <div>
              <Button
                data="About Us"
                styles={{ background: "#ffffff", color: "#ff6812" }}
              />
            </div>
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.image}>
            <img src={clientImage} alt="client" />
          </div>

          <div className={Styles.firstOverlay}>
            <img src={firstOverLayImage} alt="img" />
          </div>
          <div className={Styles.secondOverlay}>
            <img src={secondOverLayImage} alt="img" />
          </div>
          <div className={Styles.thirdOverlay}>
            <img src={thirdOverLayImage} alt="img" />
          </div>
        </div>
      </div>
      <div className={Styles.secondContainer}>
        <Grid />
      </div>
      <div className={Styles.thirdContainer}>
        <div className={Styles.left}>
          <img src={video} alt="video" />
        </div>
        <div className={Styles.right}>
          <div className={Styles.title}>
            Why EliteQA is every companies hiring choice?
          </div>
          <div className={Styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            gravida justo vitae risus varius pretium. Phasellus{" "}
          </div>
          <div className={Styles.btn}>
            <div>
              <Button data="Get Demo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
