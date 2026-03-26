import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* LEFT */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">🛒</span>
          <span className="text-xl font-bold">TechMarket</span>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex space-x-6 items-center">

          <Link className="hover:text-blue-500 transition" to="/">
            Home
          </Link>

          {/* DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="cursor-pointer hover:text-blue-500 transition">
              Products
            </span>

            {open && (
              <div className="absolute top-10 left-0 bg-white shadow-xl p-6 grid grid-cols-3 gap-6 w-[600px]">

                {/* COLUMN */}
                <div>
                  <h3 className="font-bold mb-2">Computers</h3>
                  <p className="hover:text-blue-500 cursor-pointer">PC & Monoblocks</p>
                  <p className="hover:text-blue-500 cursor-pointer">Laptops</p>
                  <p className="hover:text-blue-500 cursor-pointer">Accessories</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Components</h3>
                  <p>CPU / GPU</p>
                  <p>RAM / SSD</p>
                  <p>Motherboard</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Peripherals</h3>
                  <p>Mouse</p>
                  <p>Keyboard</p>
                  <p>Monitor</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Audio</h3>
                  <p>Headphones</p>
                  <p>Speakers</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Security</h3>
                  <p>Cameras</p>
                  <p>Smart Locks</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Networking</h3>
                  <p>Router</p>
                  <p>Switch</p>
                </div>

              </div>
            )}
          </div>

          <Link to="/components">Components</Link>
          <Link to="/network">Networking</Link>
          <Link to="/security">Security</Link>
          <Link to="/pos">POS & Office</Link>

        </div>

        {/* RIGHT */}
        <div className="hidden md:flex space-x-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;