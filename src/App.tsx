import { Routes, Route } from "react-router-dom";
import Root from "./routes/Root";
import Shop from "./pages/Shop";
import Home from "./components/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";
import CheckOut from "./pages/CheckOut";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/checkOut" element ={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
