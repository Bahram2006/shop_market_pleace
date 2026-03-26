import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

        {/* LEFT */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl font-bold text-blue-600">🛒</span>
          <span className="text-xl font-bold tracking-wide">
            TechMarket
          </span>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex space-x-8 items-center">

          {/* LINK ITEM */}
          <Link className="nav-link" to="/">Home</Link>

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="nav-link cursor-pointer">Products</span>

            {/* MEGA MENU */}
            <div
              className={`absolute left-0 top-10 w-[700px] p-6 rounded-xl shadow-xl bg-white transition-all duration-300
              ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`}
            >
              <div className="grid grid-cols-3 gap-6">

                <div>
                  <h3 className="menu-title">Computers</h3>
                  <p className="menu-item">PC & Monoblocks</p>
                  <p className="menu-item">Laptops</p>
                  <p className="menu-item">Accessories</p>
                </div>

                <div>
                  <h3 className="menu-title">Components</h3>
                  <p className="menu-item">CPU / GPU</p>
                  <p className="menu-item">RAM / SSD</p>
                  <p className="menu-item">Motherboard</p>
                </div>

                <div>
                  <h3 className="menu-title">Peripherals</h3>
                  <p className="menu-item">Mouse</p>
                  <p className="menu-item">Keyboard</p>
                  <p className="menu-item">Monitor</p>
                </div>

                <div>
                  <h3 className="menu-title">Audio</h3>
                  <p className="menu-item">Headphones</p>
                  <p className="menu-item">Speakers</p>
                </div>

                <div>
                  <h3 className="menu-title">Security</h3>
                  <p className="menu-item">Cameras</p>
                  <p className="menu-item">Smart Locks</p>
                </div>

                <div>
                  <h3 className="menu-title">Networking</h3>
                  <p className="menu-item">Router</p>
                  <p className="menu-item">Switch</p>
                </div>

              </div>
            </div>
          </div>

          <Link className="nav-link" to="/components">Components</Link>
          <Link className="nav-link" to="/network">Networking</Link>
          <Link className="nav-link" to="/security">Security</Link>

        </div>

        {/* RIGHT */}
        <div className="hidden md:flex space-x-3">
          <button className="btn-primary">Login</button>
          <button className="btn-outline">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;