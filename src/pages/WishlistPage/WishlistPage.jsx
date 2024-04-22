import { useState } from "react";
import ItemCard from "../../containers/ItemCard/ItemCard";
import { tempWishlist } from "../../data/tempData";
import styles from "./WishlistPage.module.scss";

const WishlistPage = () => {
  const [presentItems, setPresentItems] = useState(tempWishlist.user1.items);

  const handleNameClick = () => {
    console.log("Clicked on item ID:", itemID);
  };

  const props = ["thumbnail", "name", "price", "wishlist", "bin", "cart"];

  return (
    <main className={styles.list}>
      <h1 className={styles.title}>Wishlist</h1>
      {presentItems.map((itemID) => (
        <ItemCard
          className={styles.card}
          key={itemID}
          itemID={itemID}
          onClick={handleNameClick}
          props={props}
          style={"wishlist"}
          presentItems={presentItems}
          setPresentItems={setPresentItems}
        />
      ))}
    </main>
  );
};

export default WishlistPage;
