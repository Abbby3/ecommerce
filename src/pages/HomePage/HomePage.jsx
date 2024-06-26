import styles from "./HomePage.module.scss";
import FeaturedSection from "../../components/HomePage/FeaturedSection/FeaturedSection";
import { randomItems } from "../../services/randomItems";
import RecommendedSection from "../../components/HomePage/RecommendedSection/RecommendedSection";
import SaleSection from "../../components/HomePage/SaleSection/SaleSection";
import { pullData } from "../../services/database";
import { tempItems, tempImages, tempCart, tempWishlist } from "../../data/tempData";

const HomePage = () => {
  pullData("items", tempItems);
  pullData("cart", tempCart);
  pullData("wishlist", tempWishlist);

  const featuredItems = randomItems(3);
  const saleItems = randomItems(3, "sale");
  const recommendedItems = randomItems(10);

  return (
    <main className={styles.home}>
      <FeaturedSection featuredItems={featuredItems} />
      <SaleSection saleItems={saleItems} />
      <RecommendedSection recommendedItems={recommendedItems} />
    </main>
  );
};

export default HomePage;
