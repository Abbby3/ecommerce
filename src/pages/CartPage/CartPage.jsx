import ItemCard from "../../containers/ItemCard/ItemCard";
import { tempCart } from "../../data/tempData";
import styles from "./CartPage.module.scss";
import { useState } from "react";

const CartPage = () => {
  const [presentItems, setPresentItems] = useState(tempCart.user1.items);

  const handleNameClick = (itemID) => {
    console.log("Clicked on item ID:", itemID);
  };
  const props = ["thumbnail", "name", "original", "price", "counter", "cart", "bin"];

  return (
    <main className={styles.list}>
      <h1 className={styles.title}>Cart</h1>
      {presentItems.map((itemID) => (
        <ItemCard
          className={styles.card}
          key={itemID}
          itemID={itemID}
          onClick={handleNameClick}
          props={props}
          style={"cart"}
          presentItems={presentItems}
          setPresentItems={setPresentItems}
        />
      ))}
    </main>
  );
};

export default CartPage;
