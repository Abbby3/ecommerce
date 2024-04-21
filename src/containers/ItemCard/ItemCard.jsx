import styles from "./ItemCard.module.scss";
import { tempItems } from "../../data/tempData";
import CartBtn from "../../components/reusable/CartBtn/CartBtn";
import WishlistBtn from "../../components/reusable/WishlistBtn/WishlistBtn";

const ItemCard = ({ itemID, onClick }) => {
  const handleCardClick = () => {
    onClick(itemID);
  };

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
        <p>${tempItems[itemID].price}</p>
      </div>

      <div className={styles.btns}>
        <WishlistBtn itemID={itemID} />
        <CartBtn itemID={itemID} />
      </div>
    </div>
  );
};

export default ItemCard;
