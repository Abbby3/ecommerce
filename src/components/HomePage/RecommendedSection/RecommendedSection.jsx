import React from "react";
import styles from "./RecommendedSection.module.scss";
import { randomItems } from "../../../services/randomItems";
import ItemCard from "../../../containers/ItemCard/ItemCard";

const RecommendedSection = ({recommendedItems}) => {
  

  const handleItemClick = (itemID) => {
    console.log("Clicked on item ID:", itemID);
  };

  return (
    <div className={styles.recommendedSection}>
      <h2 className={styles.title}>For You</h2>
      <div className={styles.cards}>
        {recommendedItems.map((itemID) => (
          <ItemCard key={itemID} itemID={itemID} onClick={handleItemClick} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
