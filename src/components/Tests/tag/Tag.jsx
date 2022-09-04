import Styles from "./tag.module.css";
import skillClose from "../../../assets/icons/skillclose.svg";

function Tag({ data }) {
  return (
    <span className={Styles.tag}>
      {data} <img src={skillClose} alt="" />
    </span>
  );
}

export default Tag;
