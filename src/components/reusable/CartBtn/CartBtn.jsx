import { useState, useEffect } from "react";
import styles from "./CartBtn.module.scss";
import cartIcon from "../../../assets/cartIcon.png";
import cartedIcon from "../../../assets/cartedIcon.png";
import binIcon from "../../../assets/binIcon.png";
import { tempCart } from "../../../data/tempData";
import { pushData } from "../../../services/database";

const CartBtn = ({ itemID, bin, text, onClick }) => {
  const isItemCarted = tempCart.user1.items.includes(itemID);
  const [isCarted, setIsCarted] = useState(isItemCarted);

  useEffect(() => {
    setIsCarted(tempCart.user1.items.includes(itemID));
  }, [itemID]);

  const handleClick = () => {
    setIsCarted(!isCarted);

    if (!isCarted) {
      tempCart.user1.items.push(itemID);
    } else {
      const index = tempCart.user1.items.indexOf(itemID);
      if (index !== -1) {
        tempCart.user1.items.splice(index, 1);
      }
    }

    onClick && onClick();

    pushData(tempCart, "cart");
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img
        className={styles.btnimg}
        src={(bin && binIcon) || (isItemCarted && cartedIcon) || cartIcon}
        alt="cart"
      />
      {text}
    </button>
  );
};

export default CartBtn;
