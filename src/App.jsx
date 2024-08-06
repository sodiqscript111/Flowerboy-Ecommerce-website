import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navigation/navigation.component";
import Home from "./routes/Home/home.component";
import Menu from "./routes/Menu/menu";
import Shop from "./routes/Shop/shopcomponents.";
import CyclingShirt from "./routes/Cyclingshirts/cyclingshirts.component";
import FragranceProduct from "./routes/FragranceProduct/fragranceproduct";
import Flowerboy from "./routes/Flowerboy/flowerboy.component";
import Accessorie from "./routes/Assessories/assessories.component";
import BedShop from "./routes/Bedshop/bedshop.component";
import Checkout from "./routes/Checkout/checkout.component";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cycling shirts" element={<CyclingShirt />} />
        <Route path="/fragrance" element={<FragranceProduct />} />
        <Route path="/ivy tee" element={<Flowerboy />} />
        <Route path="/accesories" element={<Accessorie />} />
        <Route path="/bedcloth" element={<BedShop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
