import { useState, useEffect } from "react";
import styles from "./CartBtn.module.scss";
import cartIcon from "../../../assets/cartIcon.png";
import cartedIcon from "../../../assets/cartedIcon.png";
import { checkItem, pushItem } from "../../../services/database";
import { useLazyContext } from "../../../context/LazyContext";

const CartBtn = ({ itemID }) => {
  const [isCarted, setIsCarted] = useState(false);
  const { isLazy, lazy } = useLazyContext();

  useEffect(() => {
    const fetchCartedStatus = async () => {
      await checkItem(itemID, "cart").then((res) => {
        setIsCarted(res);
      });
    };
    fetchCartedStatus();
  }, [isLazy]);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsCarted(!isCarted);
    pushItem(itemID, "cart").then(() => {
      lazy();
    });
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img className={styles.btnimg} src={isCarted ? cartedIcon : cartIcon} alt="cart" />
    </button>
  );
};

export default CartBtn;
