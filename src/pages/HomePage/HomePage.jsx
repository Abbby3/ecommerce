import styles from "./HomePage.module.scss";
import FeaturedSection from "../../components/HomePage/FeaturedSection/FeaturedSection";
import { randomItems } from "../../services/randomItems";

const HomePage = () => {
  const featuredItems = randomItems(3);

  return (
    <div className={styles.home}>
      <FeaturedSection featuredItems={featuredItems} />
      <section className={styles.sale}></section>
      <section className={styles.recommended}></section>
    </div>
  );
};

export default HomePage;
