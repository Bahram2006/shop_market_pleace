import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MarketPlace</div>
      <div className="space-x-4 text-gray-800 font-semibold">
        <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
        <Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link>
        <Link to="/cart" className="hover:text-blue-500 transition-colors">Cart</Link>
        <Link to="/profile" className="hover:text-blue-500 transition-colors">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;