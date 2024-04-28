import styles from "./WishlistPage.module.scss";
import { useState, useEffect } from "react";
import { pullColl } from "../../services/database";
import ItemCard from "../../containers/ItemCard/ItemCard";
import ItemThumbnail from "../../components/ItemDetails/ItemThumbnail/ItemThumbnail";
import ItemName from "../../components/ItemDetails/ItemName/ItemName";
import ItemPrice from "../../components/ItemDetails/ItemPrice/ItemPrice";
import CartBtn from "../../components/misc/CartBtn/CartBtn";
import BinBtn from "../../components/misc/BinBtn/BinBtn";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      const wishlistData = await pullColl("users");
      setWishlistItems(wishlistData["user1"].wishlist);
    };
    fetchWishlistItems();
  }, []);


  return (
    <main className={styles.list}>
      <h1 className={styles.title}>Wishlist</h1>
      {wishlistItems.map((itemID) => (
        <ItemCard className={styles.card} key={itemID} itemID={itemID} style={"long"}>
          <ItemThumbnail itemID={itemID} style={"long"} />
          <ItemName itemID={itemID} />
          <ItemPrice itemID={itemID} />
          <div className={styles.btns}>
            <CartBtn itemID={itemID} />
            <BinBtn itemID={itemID} page={"wishlist"} />
          </div>
        </ItemCard>
      ))}
    </main>
  );
};

export default WishlistPage;
