import styles from "./Foot.module.scss";
import logoIcon from "../../../assets/logoIcon.png";
import { NavLink } from "react-router-dom";

const Foot = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.group}>
        <img className={styles.logo} src={logoIcon} alt="logo" />
        <div className={styles.links}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/wishlist">
            Wishlist
          </NavLink>
          <NavLink className={styles.link} to="/cart">
            Cart
          </NavLink>
        </div>
      </div>
      <p className={styles.copyright}>Copyright © 2024</p>
    </footer>
  );
};

export default Foot;
