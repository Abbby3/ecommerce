import { useEffect, useState } from "react";
import styles from "./WishlistBtn.module.scss";
import wishlistIcon from "../../../assets/wishlistIcon.png";
import wishlistedIcon from "../../../assets/wishlistedIcon.png";
import { checkItem, pushItem } from "../../../services/database";

const WishlistBtn = ({ itemID }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchWishlistedStatus = async () => {
      await checkItem(itemID, "wishlist").then((res) => {
        setIsWishlisted(res);
      });
    };
    fetchWishlistedStatus();
  }, []);

  const handleClick = (e) => {
    setIsWishlisted(!isWishlisted);
    pushItem(itemID, "wishlist");
    e.stopPropagation();
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img
        className={styles.btnimg}
        src={isWishlisted ? wishlistedIcon : wishlistIcon}
        alt="wishlist"
      />
    </button>
  );
};

export default WishlistBtn;
