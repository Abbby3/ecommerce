import React from "react";
import styles from "./RecommendedSection.module.scss";
import { randomItems } from "../../../services/randomItems";
import ItemCard from "../../../containers/ItemCard/ItemCard";

const RecommendedSection = ({ recommendedItems }) => {
  const handleItemClick = (itemID) => {
    console.log("clicked on", itemID);
  };

  const props = ["thumbnail", "name", "price", "wishlist", "cart"];

  return (
    <div className={styles.recommendedSection}>
      <h2 className={styles.title}>For You</h2>
      <div className={styles.cards}>
        {recommendedItems.map((itemID) => (
          <ItemCard
            key={itemID}
            itemID={itemID}
            onClick={handleItemClick}
            props={props}
            style={"recommended"}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
