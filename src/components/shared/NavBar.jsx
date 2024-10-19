import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-colors py-3 duration-300 ${location.pathname === "/business-profile" ? 'bg-golden' : ''} ${isMobileMenuOpen ? 'bg-customGolden' : ''}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12 w-auto" src="/cleaningImages/logo.jpg" alt="Your Company" />
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className={`hidden sm:flex sm:space-x-4 flex-grow justify-end`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden font-bold' : 'text-customGrey hover:text-customGolden'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cleaning-services"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden font-bold' : 'text-customGrey hover:text-customGolden'
                }`
              }
            >
              Cleaning Services
            </NavLink>
            <NavLink
              to="/leano-profile"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden font-bold' : 'text-customGrey hover:text-customGolden'
                }`
              }
            >
              Swayz Construction
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden font-bold' : 'text-customGrey hover:text-customGolden'
                }`
              }
            >
              Leano Profile
            </NavLink>
            <NavLink
              to="/business-profile"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden font-bold' : 'text-customGrey hover:text-customGolden'
                }`
              }
            >
              Business Profile
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden z-10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden md:bg-transparent bg-yellow-50 rounded-md' : 'text-black hover:text-customGolden'
                }`
              }
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/cleaning-services"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden md:bg-transparent bg-yellow-50 rounded-md' : 'text-black hover:text-customGolden'
                }`
              }
              onClick={toggleMobileMenu}
            >
              Cleaning Services
            </NavLink>
            <NavLink
              to="/leano-profile"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden md:bg-transparent bg-yellow-50 rounded-md' : 'text-black hover:text-customGolden'
                }`
              }
              onClick={toggleMobileMenu}
            >
              Swayz Construction
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden md:bg-transparent bg-yellow-50 rounded-md' : 'text-black hover:text-customGolden'
                }`
              }
              onClick={toggleMobileMenu}
            >
              Leano Profile
            </NavLink>
            <NavLink
              to="/business-profile"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive ? 'text-customGolden md:bg-transparent bg-yellow-50 rounded-md' : 'text-black hover:text-customGolden'
                }`
              }
              onClick={toggleMobileMenu}
            >
              Business Profile
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
