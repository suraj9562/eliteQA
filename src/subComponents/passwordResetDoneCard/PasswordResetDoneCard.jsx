import Styles from "./passwordResetDoneCard.module.css";
import passImg from "./../../assets/images/passImg.svg";

function PasswordResetDoneCard() {
  return (
    <div className={Styles.container}>
      <img src={passImg} alt="" />
      <div className={Styles.title}>
        Password Reset Link has been sent to your email
      </div>
    </div>
  );
}

export default PasswordResetDoneCard;
