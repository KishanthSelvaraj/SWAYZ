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
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-colors py-3 duration-300 ${location.pathname === "/business-profile" ? 'bg-golden' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-12 w-auto" src="/cleaningImages/logo.jpg" alt="Your Company" />
          </div>

          {/* Desktop navigation links */}
          <div className="hidden sm:flex sm:space-x-4">
            <NavLink
              to="/cleaning-services"
              className="px-3 py-2 text-xs lg:text-sm font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
              activeClassName="underline text-customGolden font-bold"
            >
              Cleaning Services
            </NavLink>
            <NavLink
              to="/leano-profile"
              className="px-3 py-2 text-xs lg:text-sm font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
              activeClassName="underline text-customGolden font-bold"
            >
              Swayz Construction
            </NavLink>
            <NavLink
              to="/profile"
              className="px-3 py-2 text-xs lg:text-sm font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
              activeClassName="underline text-customGolden font-bold"
            >
              Leano Profile
            </NavLink>
            <NavLink
              to="/business-profile"
              className="px-3 py-2 text-xs lg:text-sm font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
              activeClassName="underline text-customGolden font-bold"
            >
              Business Profile
            </NavLink>
          </div>

          {/* User menu */}
          <div className="flex items-center">
            {/* <button
              type="button"
              className="relative rounded-full bg-white text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
              onClick={toggleUserMenu}
            >
              <span className="sr-only">View notifications</span>
              <FiBell className="h-6 w-6" />
            </button> */}

            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
                id="user-menu-button"
                aria-expanded={isUserMenuOpen}
                onClick={toggleUserMenu}
              >
                <span className="sr-only">Open user menu</span>
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Profile" />
              </button>

         
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => setUserMenuOpen(false)}>Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => setUserMenuOpen(false)}>Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => setUserMenuOpen(false)}>Sign out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/cleaning-services"
              className="block px-3 py-2 text-base font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
              onClick={toggleMobileMenu}
            >
              Cleaning Services
            </NavLink>
            <NavLink
              to="/leano-profile"
              className="block px-3 py-2 text-base font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
              onClick={toggleMobileMenu}
            >
              Swayz Construction
            </NavLink>
            <NavLink
              to="/profile"
              className="block px-3 py-2 text-base font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
              onClick={toggleMobileMenu}
            >
              Leano Profile
            </NavLink>
            <NavLink
              to="/business-profile"
              className="block px-3 py-2 text-base font-semibold text-customGrey hover:text-customGolden flex items-center justify-center"
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
