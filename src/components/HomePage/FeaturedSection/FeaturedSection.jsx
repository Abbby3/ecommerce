import { useState, useEffect } from "react";
import styles from "./FeaturedSection.module.scss";
import ItemCard from "../../../containers/ItemCard/ItemCard";
import Carousel from "../../misc/Carousel/Carousel";
import ItemName from "../../ItemDetails/ItemName/ItemName";
import ItemPrice from "../../ItemDetails/ItemPrice/ItemPrice";
import WishlistBtn from "../../misc/WishlistBtn/WishlistBtn";
import CartBtn from "../../misc/CartBtn/CartBtn";
import { useDataContext } from "../../../context/DataContext";

const FeaturedSection = ({ featuredItems }) => {
  const data = useDataContext();
  const [index, setIndex] = useState(0);

  const handleCrement = (v) => {
    setIndex((prev) => {
      const i =
        v === "+"
          ? (prev + 1) % featuredItems.length
          : (prev - 1 + featuredItems.length) % featuredItems.length;
      return i;
    });
  };

  const currentItem = featuredItems[index];
  const thumbnail = data[featuredItems[index]].thumbnail;

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleCrement("+");
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentItem]);

  return (
    <section className={styles.section}>
      <h2>Featured</h2>

      <ItemCard itemID={currentItem} style={"big"}>
        <Carousel url={thumbnail} onCrement={handleCrement} />

        <div className={styles.info}>
          <ItemName itemID={currentItem} />
          <ItemPrice itemID={currentItem} />
          <div className={styles.btns}>
            <WishlistBtn itemID={currentItem} />
            <CartBtn itemID={currentItem} />
          </div>
        </div>
      </ItemCard>
    </section>
  );
};

export default FeaturedSection;
