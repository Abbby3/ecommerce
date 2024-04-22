import { useState } from "react";
import ItemCard from "../../containers/ItemCard/ItemCard";
import styles from "./WishlistPage.module.scss";
import { pullData } from "../../services/database";
import { tempItems, tempImages, tempCart, tempWishlist } from "../../data/tempData";

const WishlistPage = () => {
  pullData("cart", tempCart);
  pullData("wishlist", tempWishlist);

  const [presentItems, setPresentItems] = useState(tempWishlist.user1.items);

  const handleNameClick = (itemID) => {
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
