import { useEffect, useState } from "react";
import styles from "./WishlistBtn.module.scss";
import wishlistIcon from "../../assets/wishlistIcon.png";
import wishlistedIcon from "../../assets/wishlistedIcon.png";
import { tempWishlist } from "../../../data/tempData";
import { pushData } from "../../../services/database";

const WishlistBtn = ({ itemID, text }) => {
  const isItemWishlisted = tempWishlist.user1.items.includes(itemID);
  const [isWishlisted, setIsWishlisted] = useState(isItemWishlisted);

  useEffect(() => {
    setIsWishlisted(tempWishlist.user1.items.includes(itemID));
  }, [itemID]);

  const handleClick = () => {
    setIsWishlisted(!isWishlisted);

    if (!isWishlisted) {
      tempWishlist.user1.items.push(itemID);
    } else {
      const index = tempWishlist.user1.items.indexOf(itemID);
      if (index !== -1) {
        tempWishlist.user1.items.splice(index, 1);
      }
    }

    pushData(tempWishlist, "wishlist");
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img
        className={styles.btnimg}
        src={isWishlisted ? wishlistedIcon : wishlistIcon}
        alt="wishlist"
      />
      {text}
    </button>
  );
};

export default WishlistBtn;