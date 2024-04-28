import styles from "./SaleSection.module.scss";
import ItemCard from "../../../containers/ItemCard/ItemCard";
import ItemThumbnail from "../../ItemDetails/ItemThumbnail/ItemThumbnail";
import ItemName from "../../ItemDetails/ItemName/ItemName";
import ItemPrice from "../../ItemDetails/ItemPrice/ItemPrice";
import WishlistBtn from "../../misc/WishlistBtn/WishlistBtn";
import CartBtn from "../../misc/CartBtn/CartBtn";
import ItemSale from "../../ItemDetails/ItemSale/ItemSale";

const SaleSection = ({ saleItems }) => {

  return (
    <section className={styles.section}>
      <h2 className={styles.secTitle}>On Sale</h2>
      <div className={styles.sale}>
        {saleItems.map((itemID) => (
          <ItemCard key={itemID} itemID={itemID} style={"sale"} >
            <ItemThumbnail itemID={itemID} style={"short"} />
            <ItemName itemID={itemID} />
            <ItemPrice itemID={itemID} />
            <div className={styles.btns}>
              <WishlistBtn itemID={itemID} />
              <CartBtn itemID={itemID} />
            </div>
            <ItemSale itemID={itemID} />
          </ItemCard>
        ))}
      </div>
    </section>
  );
};

export default SaleSection;
