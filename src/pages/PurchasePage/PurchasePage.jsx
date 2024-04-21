import styles from "./PurchasePage.module.scss";
import purchaseIcon from "../../assets/purchaseIcon.png";

const PurchasePage = () => {
  return (
    <div className={styles.purchase}>
      <img className={styles.icon} src={purchaseIcon} alt="construction icon" />
      <span className={styles.text}>
        <h1>Under Construction</h1>
        <p>Come back later!</p>
      </span>
    </div>
  );
};

export default PurchasePage;
