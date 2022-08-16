import Button from "../../subComponents/button/Button";
import Styles from "./notFound.module.css";

import notFound from "./../../assets/images/notFound.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={Styles.container}>
      <img src={notFound} alt="" />
      <div className={Styles.overlay}>
        <div className={Styles.title}>
          Looks like you are lost somewhere. Page you are looking for does not
          exhist
        </div>
        <Link to="/">
          <Button data="Home" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
