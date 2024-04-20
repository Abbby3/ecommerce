import "./App.scss";
import { pullData } from "./services/database";
import { tempItems, tempImages, tempWishlist, tempCart } from "./data/tempData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Foot from "./components/Foot/Foot";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import CartPage from "./pages/CartPage/CartPage";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

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
      <BrowserRouter>
        <Navbar />
        {loading ? (
          <Loading />
        ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/purchase" element={<PurchasePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        )}
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
