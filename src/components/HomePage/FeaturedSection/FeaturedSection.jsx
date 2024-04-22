import styles from "./FeaturedSection.module.scss";
import Carousel from "../../../containers/Carousel/Carousel";
import { useState } from "react";
import { tempItems } from "../../../data/tempData";
import WishlistBtn from "../../reusable/WishlistBtn/WishlistBtn";
import CartBtn from "../../reusable/CartBtn/CartBtn";

const FeaturedSection = ({ featuredItems }) => {
  const [currentItemID, setCurrentItemID] = useState(featuredItems[0]);

  const handleClick = () => {
    console.log("clicked on", currentItemID);
  };

  return (
    <section className={styles.section}>
      <h2>Featured</h2>
      <div className={styles.featured}>
        <Carousel
          featuredItems={featuredItems}
          itemID={currentItemID}
          setCurrentItemID={setCurrentItemID}
        />
        <div className={styles.info}>
          <button onClick={handleClick}>
            <h3 className={styles.name}>{tempItems[currentItemID].name}</h3>
          </button>
          <p className={styles.price}>${tempItems[currentItemID].price}</p>
          <div className={styles.btns}>
            <WishlistBtn itemID={currentItemID} />
            <CartBtn itemID={currentItemID} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
