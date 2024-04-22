import React from "react";
import styles from "./ItemCard.module.scss";
import { tempItems } from "../../data/tempData";
import CartBtn from "../../components/reusable/CartBtn/CartBtn";
import WishlistBtn from "../../components/reusable/WishlistBtn/WishlistBtn";

const ItemCard = ({ itemID, onClick, props, style }) => {
  const handleCardClick = () => {
    onClick(itemID);
  };
  const discounted = tempItems[itemID].price;
  const discount = tempItems[itemID].sale;
  const original = Math.round(((discounted * 100) / (100 - discount)) * 100) / 100;

  return (
    <div className={styles[style]}>
      {props.includes("thumbnail") && (
        <img
          src={tempItems[itemID].thumbnail}
          alt={tempItems[itemID].name}
          className={styles.thumbnail}
        />
      )}
      <div className={styles.info}>
        {props.includes("name") && (
          <h3 className={styles.name} onClick={handleCardClick}>
            {tempItems[itemID].name}
          </h3>
        )}
        {props.includes("sale") && (
          <>
            <p className={styles.original}>${original}</p>
            <p className={styles.discount}>{discount}% off!</p>
          </>
        )}
        {props.includes("price") && <p>${tempItems[itemID].price}</p>}
      </div>

      <div className={styles.btns}>
        {props.some((prop) => prop === "wishlist" || "bin") && (
          <WishlistBtn itemID={itemID} bin={props.includes("bin")} />
        )}
        {props.some((prop) => prop === "cart" || "bin") && (
          <CartBtn itemID={itemID} bin={props.includes("bin")} />
        )}
      </div>
    </div>
  );
};

export default ItemCard;
