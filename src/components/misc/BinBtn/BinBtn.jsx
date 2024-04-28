import styles from "./BinBtn.module.scss";
import binIcon from "../../../assets/binIcon.png";
import { pushItem } from "../../../services/database";

const BinBtn = ({ itemID, page }) => {

  const handleClick = (e) => {
    pushItem(itemID, page);
    e.stopPropagation();
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img
        className={styles.btnimg}
        src={binIcon}
        alt="remove"
      />
    </button>
  );
};

export default BinBtn;
