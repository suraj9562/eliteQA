import cardIcon from "./../../assets/icons/cardIcon.svg";
import Styles from "./card.module.css";

function Card() {
  return (
    <div className={Styles.card}>
      <div className={Styles.logo}>
        <img src={cardIcon} alt="icon" />
      </div>
      <div className={Styles.title}>Our Feature Title Goes here</div>
      <div className={Styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida
      </div>
    </div>
  );
}

export default Card;
