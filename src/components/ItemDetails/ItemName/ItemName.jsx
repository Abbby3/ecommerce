import styles from "./ItemName.module.scss";
import { useDataContext } from "../../../context/DataContext";

const ItemName = ({ itemID }) => {
  const data = useDataContext();

  return <h2 className={styles.title}>{data[itemID].name}</h2>;
};

export default ItemName;
