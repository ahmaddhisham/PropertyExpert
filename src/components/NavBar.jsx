import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-green-700 dark:text-green-400">
              MyLogo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-green-600">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-green-600">About</a>
            <a href="#services" className="text-gray-700 dark:text-gray-200 hover:text-green-600">Services</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-green-600">Contact</a>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 dark:text-gray-200 hover:text-green-600 focus:outline-none"
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
          <a href="#home" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">Home</a>
          <a href="#about" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">About</a>
          <a href="#services" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">Services</a>
          <a href="#contact" className="block text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-800">Contact</a>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
