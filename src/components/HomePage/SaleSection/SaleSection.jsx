import styles from "./SaleSection.module.scss";
import ItemCard from "../../../containers/ItemCard/ItemCard";

const SaleSection = ({ saleItems }) => {
  const handleItemClick = (itemID) => {
    console.log("clicked on", itemID);
  };
  const props = ["thumbnail", "name", "original", "sale", "price", "wishlist", "cart"];

  return (
    <section className={styles.section}>
      <h2 className={styles.secTitle}>On Sale</h2>
      <div className={styles.sale}>
        {saleItems.map((itemID) => (
          <ItemCard
            key={itemID}
            itemID={itemID}
            onClick={handleItemClick}
            props={props}
            style={"sale"}
          />
        ))}
      </div>
    </section>
  );
};

export default SaleSection;
