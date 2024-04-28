import styles from "./HomePage.module.scss";
import { useState, useEffect } from "react";
import FeaturedSection from "../../components/HomePage/FeaturedSection/FeaturedSection";
import RecommendedSection from "../../components/HomePage/RecommendedSection/RecommendedSection";
import SaleSection from "../../components/HomePage/SaleSection/SaleSection";
import { randomItems } from "../../services/randomItems";
import Loading from "../../components/misc/Loading/Loading";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [saleItems, setSaleItems] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchFeatured = await randomItems(3);
        setFeaturedItems(fetchFeatured);
        const fetchSale = await randomItems(3, "sale");
        setSaleItems(fetchSale);
        const fetchRecommended = await randomItems(20);
        setRecommendedItems(fetchRecommended);

        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.home}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FeaturedSection featuredItems={featuredItems} />
          <SaleSection saleItems={saleItems} />
          <RecommendedSection recommendedItems={recommendedItems} />
        </>
      )}
    </main>
  );
};

export default HomePage;
