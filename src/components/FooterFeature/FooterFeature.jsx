import Styles from "./footerfeature.module.css";

import contactImg from "./../../assets/images/contactImg.svg";
import ContactOverlay from "./../../assets/images/ContactOverlay.svg";

function FooterFeature() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <img src={contactImg} alt="" className={Styles.image}/>
        <img src={ContactOverlay} alt="" className={Styles.ContactOverlay} />
      </div>
      <div className={Styles.right}>
        <div className={Styles.title}>
          Title Of Any Special Feature Goes Hereee
        </div>
        <div className={Styles.subtitle}>
          At vero eos censes aut dolores eos, qui studiose antiqua persequeris,
          claris et ultimum bonorum, quod summum malum et, quantum possit, a
          philosophis compluribus permulta dicantur, cur nec me ab illo
          inventore veritatis et quasi naturalem atque natum sit, a se esse
          albam, dulce mel.
        </div>
      </div>
    </div>
  );
}

export default FooterFeature;
