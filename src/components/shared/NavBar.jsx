import React, { useState } from 'react';
import { FiMenu, FiX, FiBell } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-colors duration-300 ${location.pathname === "/business-profile" ? 'bg-golden' : ''}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-customGrey1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>

          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center justify-center sm:justify-start">
            <img className="h-16 w-auto" src="/cleaningImages/logo.jpg" alt="Your Company" />
          </div>

          {/* Navbar Links */}
          <div className="hidden sm:flex sm:ml-6 sm:items-center">
            <div className="flex space-x-4">
              <NavLink
                to="/cleaning-services"
                className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
              >
                Cleaning Services
              </NavLink>
              <NavLink
                to="/leano-profile"
                className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
              >
                Swayz Construction
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
              >
                Leano Profile
              </NavLink>
              <NavLink
                to="/business-profile"
                className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
              >
                Business Profile
              </NavLink>
            </div>
          </div>

          {/* User Menu Section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
              onClick={toggleUserMenu}
            >
              <span className="sr-only">View notifications</span>
              <FiBell className="h-6 w-6" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
                  id="user-menu-button"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                  onClick={toggleUserMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Profile" />
                </button>
              </div>

              {/* Dropdown menu */}
              {isUserMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => setUserMenuOpen(false)}>
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => setUserMenuOpen(false)}>
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => setUserMenuOpen(false)}>
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/cleaning-services"
              className={({ isActive }) => `block rounded-md px-3 py-2 text-base font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
              onClick={toggleMobileMenu}
            >
              Cleaning Services
            </NavLink>
            <NavLink
              to="/leano-profile"
              className={({ isActive }) => `block rounded-md px-3 py-2 text-base font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
              onClick={toggleMobileMenu}
            >
              Swayz Construction
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => `block rounded-md px-3 py-2 text-base font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
              onClick={toggleMobileMenu}
            >
              Leano Profile
            </NavLink>
            <NavLink
              to="/business-profile"
              className={({ isActive }) => `block rounded-md px-3 py-2 text-base font-semibold ${isActive ? 'underline text-customGolden font-bold' : 'text-customGrey hover:bg-customGrey1'}`}
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
