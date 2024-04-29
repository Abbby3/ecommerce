import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Foot from "./components/misc/Foot/Foot";
import Navbar from "./components/misc/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import CartPage from "./pages/CartPage/CartPage";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { DataProvider } from "./context/DataContext";
import { LazyProvider } from "./context/LazyContext";
// import { pushData } from "./devTools/devService";
// import { users, items } from "./devTools/devData";

function App() {
  // pushData(users, "users");
  // pushData(items, "items");

  return (
    <div className="ecommerce">
      <BrowserRouter>
        <Navbar />
        <DataProvider>
          <LazyProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/purchase" element={<PurchasePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </LazyProvider>
        </DataProvider>
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
