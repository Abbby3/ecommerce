import styles from "./ItemPrice.module.scss";
import { useDataContext } from "../../../context/DataContext";

const ItemPrice = ({ itemID }) => {
  const data = useDataContext();
  const discounted = data[itemID].price;
  const discount = data[itemID].sale;
  const original = Math.round(((discounted * 100) / (100 - discount)) * 100) / 100;

  return (
    <div className={styles.price}>
      {discount > 0 && <p className={styles.discount}>${original}</p>}
      <p>${discounted}</p>
    </div>
  );
};

export default ItemPrice;
