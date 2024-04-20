import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import wishlistIcon from "../../assets/wishlistIcon.png";
import cartIcon from "../../assets/cartIcon.png";
import { useState } from "react";

const Navbar = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  window.addEventListener("wheel", (e) => {
    setIsNavFixed(e.deltaY < 0);
  });

  return (
    <nav className={`${styles.nav} ${isNavFixed ? styles.fixed : styles.absolute}`}>
      <NavLink className={styles.logo} to="/">
        <h1>eCommerce</h1>
      </NavLink>
      <div className={styles.navbtns}>
        <NavLink className={styles.navbtn} to="/wishlist">
          <img className={styles.btnimg} src={wishlistIcon} alt="wishlist" />
        </NavLink>
        <NavLink className={styles.navbtn} to="/cart">
          <img className={styles.btnimg} src={cartIcon} alt="cart" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
