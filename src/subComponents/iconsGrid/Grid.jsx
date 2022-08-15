import Styles from "./grid.module.css";

import img1 from "./../../assets/icons/airbnb.svg";
import img2 from "./../../assets/icons/amazon.svg";
import img3 from "./../../assets/icons/creative.svg";
import img4 from "./../../assets/icons/DropBox.svg";
import img5 from "./../../assets/icons/google.svg";
import img6 from "./../../assets/icons/shopify.svg";

function Grid() {
  return (
    <div className={Styles.container}>
      <img src={img1} alt="img" />
      <img src={img2} alt="img" />
      <img src={img3} alt="img" />
      <img src={img4} alt="img" />
      <img src={img5} alt="img" />
      <img src={img6} alt="img" />
    </div>
  );
}

export default Grid;
