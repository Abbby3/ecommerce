import { useState, useEffect } from "react";
import styles from "./CartBtn.module.scss";
import cartIcon from "../../assets/cartIcon.png";
import { tempCart } from "../../../data/tempData";
import { pushData } from "../../../services/database";

const CartBtn = ({ itemID, text }) => {
  const isItemCarted = tempCart.user1.items.includes(itemID);
  const [isCarted, setIsCarted] = useState(isItemCarted);

  useEffect(() => {
    setIsCarted(tempCart.user1.items.includes(itemID));
  }, [itemID]);

  const handleClick = () => {
    if (!isCarted) {
      tempCart.user1.items.push(itemID);
      setIsCarted(true);
      pushData(tempCart, "cart");
    }
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img className={styles.btnimg} src={cartIcon} alt="cart" />
      {text}
    </button>
  );
};

export default CartBtn;
