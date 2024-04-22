import { useState, useEffect } from "react";
import cartIcon from "../../assets/cartIcon.png";
import binIcon from "../../assets/binIcon.png";
import { tempCart } from "../../../data/tempData";
import { pushData } from "../../../services/database";

const CartBtn = ({ itemID, bin, text }) => {
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
      <img className={styles.btnimg} src={bin ? binIcon : cartIcon} alt="cart" />
      {text}
    </button>
  );
};

export default CartBtn;
