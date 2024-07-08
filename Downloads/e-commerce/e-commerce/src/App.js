import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import ShopDetails from "./Components/ShopDetails";
import Cart from "./Components/Cart";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut";
import Testimonial from "./Components/Testimonial";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
