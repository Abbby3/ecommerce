import styles from "./SaleSection.module.scss";
import SaleCard from "../../../containers/SaleCard/SaleCard";

const SaleSection = ({ saleItems }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.secTitle}>On Sale</h2>
      <div className={styles.sale}>
        {saleItems.map((itemID) => (
          <SaleCard key={itemID} itemID={itemID} />
        ))}
      </div>
    </section>
  );
};

export default SaleSection;
