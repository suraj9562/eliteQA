import Styles from "./sliderCard.module.css";

import slideImg from "./../../assets/images/slideImg.svg";

function SliderCard() {
  return (
    <div className={Styles.card}>
      <div className={Styles.titleContainer}>
        <div className={Styles.left}>
          <img src={slideImg} alt="img" />
        </div>
        <div className={Styles.right}>
          <div className={Styles.name}>Customer Name</div>
          <div className={Styles.position}>HR Manager</div>
        </div>
      </div>
      <div className={Styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida
        justo vitae risus varius pretium
      </div>
    </div>
  );
}

export default SliderCard;
