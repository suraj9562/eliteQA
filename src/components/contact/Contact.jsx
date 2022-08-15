import Styles from "./contact.module.css";

function Contact() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.title}>
          Don’t wait! let’s start this journey of hiring
        </div>
        <div className={Styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida
          justo vitae risus varius pretium
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.input}>
          <input type="email" placeholder="Enter your email" />
          <input type="submit" value="Get Demo" className={Styles.submit}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
