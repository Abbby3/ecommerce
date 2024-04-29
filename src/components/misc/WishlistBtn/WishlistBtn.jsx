import { useEffect, useState } from "react";
import styles from "./WishlistBtn.module.scss";
import wishlistIcon from "../../../assets/wishlistIcon.png";
import wishlistedIcon from "../../../assets/wishlistedIcon.png";
import { checkItem, pushItem } from "../../../services/database";
import { useLazyContext } from "../../../context/LazyContext";

const WishlistBtn = ({ itemID }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { isLazy, lazy } = useLazyContext();

  useEffect(() => {
    const fetchWishlistedStatus = async () => {
      await checkItem(itemID, "wishlist").then((res) => {
        setIsWishlisted(res);
      });
    };
    fetchWishlistedStatus();
  }, [isLazy]);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    pushItem(itemID, "wishlist").then(() => {
      lazy();
    });
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
