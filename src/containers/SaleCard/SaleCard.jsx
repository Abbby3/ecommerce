import styles from "./SaleCard.module.scss";
import { tempItems } from "../../data/tempData";
import CartBtn from "../../components/reusable/CartBtn/CartBtn";
import WishlistBtn from "../../components/reusable/WishlistBtn/WishlistBtn";

const SaleCard = ({ itemID, onClick }) => {
  const handleCardClick = () => {
    onClick(itemID);
  };

  const discounted = tempItems[itemID].price;
  const discount = tempItems[itemID].sale;
  const original = Math.round(((discounted * 100) / (100 - discount)) * 100) / 100;

  return (
    <div className={styles.card}>
      <img
        src={tempItems[itemID].thumbnail}
        alt={tempItems[itemID].name}
        className={styles.thumbnail}
      />
      <div className={styles.info}>
        <h3 className={styles.name} onClick={handleCardClick}>
          {tempItems[itemID].name}
        </h3>
        <div className={styles.prices}>
          <p className={styles.original}>${original}</p>
          <p className={styles.discounted}>${discounted}</p>
        </div>
        <p className={styles.discount}>{discount}% off!</p>
      </div>

      <div className={styles.btns}>
        <WishlistBtn itemID={itemID} />
        <CartBtn itemID={itemID} />
      </div>
    </div>
  );
};

export default SaleCard;
