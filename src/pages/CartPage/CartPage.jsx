import styles from "./CartPage.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { pullColl } from "../../services/database";
import ItemCard from "../../containers/ItemCard/ItemCard";
import ItemThumbnail from "../../components/ItemDetails/ItemThumbnail/ItemThumbnail";
import ItemName from "../../components/ItemDetails/ItemName/ItemName";
import ItemPrice from "../../components/ItemDetails/ItemPrice/ItemPrice";
import BinBtn from "../../components/misc/BinBtn/BinBtn";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const fetchCartItems = async () => {
      const cartData = await pullColl("users");
      setCartItems(cartData["user1"].cart);
    };
    fetchCartItems();
  }, []);

  return (
    <main className={styles.list}>
      <h1 className={styles.title}>Cart</h1>
      {cartItems.map((itemID) => (
        <ItemCard className={styles.card} key={itemID} itemID={itemID} style={"long"}>
          <ItemThumbnail itemID={itemID} style={"long"} />
          <ItemName itemID={itemID} />
          <ItemPrice itemID={itemID} />
          <BinBtn itemID={itemID} page={"cart"} />
        </ItemCard>
      ))}
      {cartItems.length > 0 && (
        <div className={styles.purchase}>
          <button className={styles.btn}>
            <NavLink to="/purchase">Purchase</NavLink>
          </button>
        </div>
      )}
    </main>
  );
};

export default CartPage;
