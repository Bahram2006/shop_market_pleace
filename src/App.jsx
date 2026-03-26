import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import { CartProvider } from "./Context/CartContext";

function App() {
  return(
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;