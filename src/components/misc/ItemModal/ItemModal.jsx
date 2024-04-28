import styles from "./ItemModal.module.scss";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import { useDataContext } from "../../../context/DataContext";
import ItemName from "../../ItemDetails/ItemName/ItemName";
import ItemPrice from "../../ItemDetails/ItemPrice/ItemPrice";
import WishlistBtn from "../WishlistBtn/WishlistBtn";
import CartBtn from "../CartBtn/CartBtn";

const ItemModal = ({itemID, onToggle}) => {
  const data = useDataContext();
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState("default");

  if (data[itemID].colour) {
    setImages(data[itemID].colour[0]);
  }

  const handleCrement = (v) => {
    setIndex((prev) => {
      const i =
        v === "+"
          ? (prev + 1) % featuredItems.length
          : (prev - 1 + featuredItems.length) % featuredItems.length;
      return i;
    });
  };

  const handleToggle = () => {
    onToggle();
  };

  return (
    <div className={styles.bg} onClick={handleToggle}>
      <div className={styles.card}>
        <button onClick={handleToggle}>X</button>
        <Carousel url={} onCrement={handleCrement} />
        <div className={styles.info}>
          <ItemName itemID={itemID} />

          {data[itemID].power && (
            <>
              <p>Power:</p>
            </>
          )}
          {data[itemID].models && (
            <>
              <p>Model:</p>
            </>
          )}
          {data[itemID].surface && (
            <>
              <p>Surface:</p>
            </>
          )}
          {data[itemID].flavour && (
            <>
              <p>Flavour:</p>
            </>
          )}
          {data[itemID].storage && (
            <>
              <p>Storage:</p>
            </>
          )}
          {data[itemID].size && (
            <>
              <p>Size:</p>
            </>
          )}
          {data[itemID].colour && (
            <>
              <p>Colour:</p>
            </>
          )}

          <ItemPrice itemID={itemID} />
          <WishlistBtn itemID={itemID} />
          <CartBtn itemID={itemID} />
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
