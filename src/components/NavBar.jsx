import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black relative shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center text-2xl font-bold text-yellow-700">
              <img
                src="/p-logo.png"
                alt="PropertyExprt logo"
                className="h-8 w-auto md:h-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className="text-white hover:text-orange-200">Home</NavLink>
            <NavLink to="/buy" className="text-white hover:text-orange-200">Buy</NavLink>
            <NavLink to="/rent" className="text-white hover:text-orange-200">Rent</NavLink>
            <NavLink to="/contact" className="text-white hover:text-orange-200">Contact</NavLink>
            <button className="bg-orange-200 hover:bg-orange-100 cursor-pointer text-black font-medium px-4 py-2 rounded-md">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-yellow-600 hover:text-yellow-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1 shadow-md">
          <NavLink to="/home" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">Home</NavLink>
          <NavLink to="/about" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">About</NavLink>
          <NavLink to="/services" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">Services</NavLink>
          <NavLink to="/contact" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">Contact</NavLink>
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
