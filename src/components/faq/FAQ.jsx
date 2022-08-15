import Button from "../../subComponents/button/Button";
import Styles from "./faq.module.css";
import polygon from "./../../assets/icons/polygon.svg";

import Rectangle from "./../../assets/images/Rectangle.svg";
import RectangleUpper from "./../../assets/images/RectangleUpper.svg";
import RectangleLower from "./../../assets/images/RectangleLower.svg";

function FAQ() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <img src={Rectangle} alt="" />
        <img src={RectangleUpper} alt="" className={Styles.RectangleUpper} />
        <img src={RectangleLower} alt="" className={Styles.RectangleLower} />
      </div>
      <div className={Styles.right}>
        <div className={Styles.title}>How the whole EliteQA thing works?</div>
        <div className={Styles.pointsContainer}>
          <div className={Styles.point}>
            <img src={polygon} alt="" />
            <span>Connect With Us</span>
          </div>
          <div className={Styles.point}>
            <img src={polygon} alt="" />
            <span>Tell Your Requirements</span>
          </div>
          <div className={Styles.point}>
            <img src={polygon} alt="" />
            <span>We Will create a custom plan for you</span>
          </div>
          <div className={Styles.point}>
            <img src={polygon} alt="" />
            <span>Onboarding! Start Using!</span>
          </div>
        </div>
        <div>
          <Button
            data="Get Demo"
            styles={{ background: "#00C49A", border: "1px solid #00C49A" }}
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
