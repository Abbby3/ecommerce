import React from "react";
import styles from "./ItemCard.module.scss";
import { tempItems } from "../../data/tempData";
import CartBtn from "../../components/reusable/CartBtn/CartBtn";
import WishlistBtn from "../../components/reusable/WishlistBtn/WishlistBtn";
import { useLocation } from "react-router-dom";

const ItemCard = ({ itemID, onClick, props, style, presentItems, setPresentItems }) => {
  const handleNameClick = () => {
    onClick(itemID);
  };
  const discounted = tempItems[itemID].price;
  const discount = tempItems[itemID].sale;
  const original = Math.round(((discounted * 100) / (100 - discount)) * 100) / 100;

  const handleRemove =
    useLocation().pathname === "/wishlist" || "/cart"
      ? () => {
          const updatedItems = presentItems.filter((id) => id !== itemID);
          setPresentItems(updatedItems);
        }
      : null;

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
          <h3 className={styles.name} onClick={handleNameClick}>
            {tempItems[itemID].name}
          </h3>
        )}

        {props.includes("original") && <p className={styles.original}>${original}</p>}
        {props.includes("sale") && <p className={styles.discount}>{discount}% off!</p>}
        {props.includes("price") && <p>${tempItems[itemID].price}</p>}
      </div>

      

      <div className={styles.btns}>
        {props.some((prop) => prop === "wishlist") && (
          <WishlistBtn
            itemID={itemID}
            bin={props.includes("bin") && useLocation().pathname === "/wishlist"}
            onClick={useLocation().pathname === "/wishlist" && handleRemove}
          />
        )}
        {props.some((prop) => prop === "cart") && (
          <CartBtn
            itemID={itemID}
            bin={props.includes("bin") && useLocation().pathname === "/cart"}
            onClick={useLocation().pathname === "/cart" && handleRemove}
          />
        )}
      </div>
    </div>
  );
};

export default ItemCard;
