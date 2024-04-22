import styles from "./PurchasePage.module.scss";
import { NavLink } from "react-router-dom";

const PurchasePage = () => {
  return (
    <div className={styles.purchase}>
      <h3>Purchase successful!</h3>
      <NavLink className={styles.logo} to="/">
        Back to Home
      </NavLink>
    </div>
  );
};

export default PurchasePage;
