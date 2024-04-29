import styles from "./ItemThumbnail.module.scss";
import { useDataContext } from "../../../context/DataContext";

const ItemThumbnail = ({ itemID, style }) => {
  const data = useDataContext();
  
  return <img className={styles[style]} src={data[itemID].thumbnail} />;
};

export default ItemThumbnail;
