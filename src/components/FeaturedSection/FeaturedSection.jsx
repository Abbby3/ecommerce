import styles from "./FeaturedSection.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import { useState } from "react";
import { tempItems } from "../../data/tempData";
import WishlistBtn from "../WishlistBtn/WishlistBtn";
import CartBtn from "../CartBtn/CartBtn";

const FeaturedSection = ({ featuredItems }) => {
  const [currentItemID, setCurrentItemID] = useState(featuredItems[0]);

  const handleClick = () => {
    console.log("clicked on " + currentItemID);
  };

  return (
    <section className={styles.featured}>
      <Carousel
        featuredItems={featuredItems}
        itemID={currentItemID}
        setCurrentItemID={setCurrentItemID}
      />
      <div className={styles.info}>
        <button onClick={handleClick}>
          <h2>{tempItems[currentItemID].name}</h2>
        </button>
        <p>${tempItems[currentItemID].price}</p>
        <div className={styles.btns}>
          <WishlistBtn itemID={currentItemID} />
          <CartBtn itemID={currentItemID} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
