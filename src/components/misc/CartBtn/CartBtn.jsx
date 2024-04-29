import { useState, useEffect } from "react";
import styles from "./CartBtn.module.scss";
import cartIcon from "../../../assets/cartIcon.png";
import cartedIcon from "../../../assets/cartedIcon.png";
import { checkItem, pushItem } from "../../../services/database";

const CartBtn = ({ itemID }) => {
  const [isCarted, setIsCarted] = useState(false);

  useEffect(() => {
    const fetchCartedStatus = async () => {
      await checkItem(itemID, "cart").then((res) => {
        setIsCarted(res);
      });
    };
    fetchCartedStatus();
  }, []);

  const handleClick = (e) => {
    setIsCarted(!isCarted);
    pushItem(itemID, "cart");
    e.stopPropagation();
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img className={styles.btnimg} src={isCarted ? cartedIcon : cartIcon} alt="cart" />
    </button>
  );
};

export default CartBtn;
