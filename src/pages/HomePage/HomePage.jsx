import styles from "./HomePage.module.scss";
import FeaturedSection from "../../components/HomePage/FeaturedSection/FeaturedSection";
import { randomItems, randomSaleItems } from "../../services/randomItems";
import RecommendedSection from "../../components/HomePage/RecommendedSection/RecommendedSection";
import SaleSection from "../../components/HomePage/SaleSection/SaleSection";

const HomePage = () => {
  const featuredItems = randomItems(3);
  const saleItems = randomSaleItems(3);
  const recommendedItems = randomItems(10);

  return (
    <div className={styles.home}>
      <FeaturedSection featuredItems={featuredItems} />
      <SaleSection saleItems={saleItems} />
      <RecommendedSection recommendedItems={recommendedItems} />
    </div>
  );
};

export default HomePage;
