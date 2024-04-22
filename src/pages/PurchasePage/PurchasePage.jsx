import styles from "./PurchasePage.module.scss";
import { NavLink } from "react-router-dom";

const PurchasePage = () => {
  return (
    <main className={styles.purchase}>
      <h3>Purchase successful!</h3>
      <NavLink className={styles.logo} to="/">
        Back to Home
      </NavLink>
    </main>
  );
};

export default PurchasePage;
