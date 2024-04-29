import styles from "./BinBtn.module.scss";
import binIcon from "../../../assets/binIcon.png";
import { pushItem } from "../../../services/database";
import { useLazyContext } from "../../../context/LazyContext";

const BinBtn = ({ itemID, page }) => {
  const { isLazy, lazy } = useLazyContext();

  const handleClick = (e) => {
    pushItem(itemID, page).then(() => {
      lazy();
    });
    e.stopPropagation();
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img className={styles.btnimg} src={binIcon} alt="remove" />
    </button>
  );
};

export default BinBtn;
