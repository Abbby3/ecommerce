import styles from "./HomePage.module.scss";
import FeaturedSection from "../../components/HomePage/FeaturedSection/FeaturedSection";
import { randomItems } from "../../services/randomItems";
import RecommendedSection from "../../components/HomePage/RecommendedSection/RecommendedSection";

const HomePage = () => {
  const featuredItems = randomItems(3);
  const recommendedItems = randomItems(10);

  return (
    <div className={styles.home}>
      <FeaturedSection featuredItems={featuredItems} />
      <section></section>
      <RecommendedSection recommendedItems={recommendedItems} />
    </div>
  );
};

export default HomePage;
