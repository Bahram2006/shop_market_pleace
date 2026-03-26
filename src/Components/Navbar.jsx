import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-16">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-2xl text-blue-600">🛒</span>
          <span className="text-xl font-bold">TechMarket</span>
        </div>

        {/* CENTER SEARCH */}
        <div className="flex-1 mx-6">
          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 focus-within:ring-2 ring-blue-400">

            <FaSearch className="text-gray-500 mr-2" />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent w-full outline-none text-sm"
            />

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;