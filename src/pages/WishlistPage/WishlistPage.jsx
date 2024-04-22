import ItemCard from "../../containers/ItemCard/ItemCard";
import { tempWishlist } from "../../data/tempData";
import styles from "./WishlistPage.module.scss";

const WishlistPage = () => {
  const wishlistedItems = tempWishlist.user1.items;
  const handleItemClick = (itemID) => {
    console.log("Clicked on item ID:", itemID);
  };
  const props = ["thumbnail", "name", "bin", "cart"];

  return (
    <div className={styles.list}>
      <h1 className={styles.title}>Wishlist</h1>
      {wishlistedItems.map((itemID) => (
        <ItemCard
          className={styles.card}
          key={itemID}
          itemID={itemID}
          onClick={handleItemClick}
          props={props}
          style={"wishlist"}
        />
      ))}
    </div>
  );
};

export default WishlistPage;
