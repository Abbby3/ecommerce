import styles from "./Carousel.module.scss";
import { tempItems } from "../../data/tempData";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import { useEffect } from "react";

const Carousel = ({ featuredItems, itemID, setCurrentItemID }) => {
  const changeItem = (dir) => {
    const currentIndex = featuredItems.indexOf(itemID);
    let newIndex;
    if (dir === "next") {
      newIndex = (currentIndex + 1) % featuredItems.length;
    } else if (dir === "prev") {
      newIndex = (currentIndex - 1 + featuredItems.length) % featuredItems.length;
    }
    setCurrentItemID(featuredItems[newIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeItem("next");
    }, 4000);
    return () => clearInterval(intervalId);
  }, [itemID]);

  return (
    <div className={styles.carousel}>
      <button
        className={styles.carBtn}
        onClick={() => {
          changeItem("prev");
        }}
      >
        <img className={styles.img} src={left} alt="previous" />
      </button>

      <img
        src={tempItems[itemID].thumbnail}
        alt={tempItems[itemID].name}
        className={styles.thumbnail}
      />

      <button
        className={styles.carBtn}
        onClick={() => {
          changeItem("next");
        }}
      >
        <img className={styles.img} src={right} alt="next" />
      </button>
    </div>
  );
};

export default Carousel;
