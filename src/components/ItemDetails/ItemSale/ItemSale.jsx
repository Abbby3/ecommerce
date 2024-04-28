import styles from "./ItemSale.module.scss";
import { useDataContext } from "../../../context/DataContext";

const ItemName = ({ itemID }) => {
  const data = useDataContext();

  return <p className={styles.sale}>{data[itemID].sale}% off!</p>;
};

export default ItemName;
