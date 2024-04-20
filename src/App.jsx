import "./App.scss";
import { pushData, pullData } from "./services/database";
import { tempItems, tempImages, tempWishlist, tempCart } from "./data/tempData";
import Loading from "./components/Loading/Loading";
import CartBtn from "./components/CartBtn/CartBtn";
import { useEffect, useState } from "react";
import Foot from "./components/Foot/Foot";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
          await pullData("items", tempItems);
          await pullData("images", tempImages);
          await pullData("cart", tempCart);
          await pullData("wishlist", tempWishlist);
      } catch (error) {
        setErrors(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ecommerce">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
         <h1>hi</h1>
        </>
      )}
      <Foot />
    </div>
  );
}

export default App;
