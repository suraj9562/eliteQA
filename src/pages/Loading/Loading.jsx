import Styles from "./loading.module.css";

function Loading() {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <div className={Styles.text}>
          The best teamwork comes from men who are working independently toward
          one goal in unison{" "}
        </div>
        <div className={Styles.author}>
          <span>-</span>
          <span>James Penney</span>
        </div>
      </div>
      <div className={Styles.loader}>
        <div className={Styles.dot}></div>
      </div>
    </div>
  );
}

export default Loading;
