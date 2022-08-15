import Styles from "./button.module.css";

function Button({ data, styles }) {
  return (
    <div className={Styles.container} style={styles}>
      {data}
    </div>
  );
}

export default Button;
