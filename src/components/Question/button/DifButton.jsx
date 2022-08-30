import Styles from "./button.module.css";

function DifButton({ data, styles, icon, textStyle }) {
  return (
    <div className={Styles.container} style={styles}>
      {icon && <img src={icon} alt="" />}
      <span style={textStyle}>{data}</span>
    </div>
  );
}

export default DifButton;
