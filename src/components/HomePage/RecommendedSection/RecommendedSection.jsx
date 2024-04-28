import React from "react";
import styles from "./RecommendedSection.module.scss";
import ItemCard from "../../../containers/ItemCard/ItemCard";
import ItemThumbnail from "../../ItemDetails/ItemThumbnail/ItemThumbnail";
import ItemName from "../../ItemDetails/ItemName/ItemName";
import ItemPrice from "../../ItemDetails/ItemPrice/ItemPrice";
import WishlistBtn from "../../misc/WishlistBtn/WishlistBtn";
import CartBtn from "../../misc/CartBtn/CartBtn";

const RecommendedSection = ({ recommendedItems }) => {

  return (
    <section className={styles.recommendedSection}>
      <h2 className={styles.title}>For You</h2>
      <div className={styles.cards}>
        {recommendedItems.map((itemID) => (
          <ItemCard key={itemID} itemID={itemID} style={"recommended"}>
            <ItemThumbnail itemID={itemID} style={"short"} />
            <ItemName itemID={itemID} />
            <ItemPrice itemID={itemID} />
            <div className={styles.btns}>
              <WishlistBtn itemID={itemID} />
              <CartBtn itemID={itemID} />
            </div>
          </ItemCard>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
