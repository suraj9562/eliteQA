import Styles from "./feature.module.css";
import Card from "../../subComponents/card/Card";

function Feature() {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>Features That separate us from crowd</div>
      <div className={Styles.cardContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Feature;
