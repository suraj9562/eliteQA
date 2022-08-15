import Button from "../../subComponents/button/Button";
import Styles from "./footer.module.css";

function Footer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.title}>EliteQA</div>
        <div className={Styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida
          justo vitae risus varius pretium
        </div>
        <div className={Styles.icons}></div>
      </div>
      <div className={Styles.mid}>
        <div className={Styles.block}>
          <div className={Styles.title}>Main</div>
          <div className={Styles.links}>
            <span>Product</span>
            <span>Tour</span>
            <span>Get Demo</span>
            <span>Privacy Refund Policy</span>
          </div>
        </div>
        <div className={Styles.block}>
          <div className={Styles.title}>Main</div>
          <div className={Styles.links}>
            <span>Product</span>
            <span>Tour</span>
            <span>Get Demo</span>
            <span>Privacy Refund Policy</span>
          </div>
        </div>
        <div className={Styles.block}>
          <div className={Styles.title}>Main</div>
          <div className={Styles.links}>
            <span>Product</span>
            <span>Tour</span>
            <span>Get Demo</span>
            <span>Privacy Refund Policy</span>
          </div>
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.title}>Subscribe Us</div>
        <div className={Styles.input}>
          <input type="email" placeholder="Your email here..." />
        </div>
        <div>
          <Button data="Get Demo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
