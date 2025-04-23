import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pebblify from "../assets/logos/pebblify.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-3xl font-bold ${
            scrolled ? "text-blue-700" : "text-white"
          }`}
        >
          <Link to="/">
            <img src={pebblify} alt="pebblify" className="w-24  " />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavItem text="HOME" scrolled={scrolled} />
          <NavItem text="SERVICES" hasDropdown scrolled={scrolled} />
          <NavItem text="PRODUCT" hasDropdown scrolled={scrolled} />
          <NavItem text="CONTACT" scrolled={scrolled} />
          <NavItem text="PRICING" scrolled={scrolled} />
          <div className={`${scrolled ? "text-gray-800" : "text-white"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? "text-gray-800" : "text-white"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 bg-blue-800">
          <MobileNavItem text="HOME" />
          <MobileNavItem text="SERVICES" />
          <MobileNavItem text="PRODUCT" />
          <MobileNavItem text="CONTACT" />
          <MobileNavItem text="PRICING" />
        </div>
      )}
    </nav>
  );
};

// Desktop Nav Item
const NavItem = ({ text, hasDropdown = false, scrolled }) => {
  return (
    <div className="relative group">
      <Link
        to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
        className={`font-medium text-sm flex items-center transition-colors duration-300 ${
          scrolled
            ? "text-gray-800 hover:text-blue-600"
            : "text-white hover:text-blue-200"
        }`}
      >
        {text}
        {hasDropdown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </Link>
      {hasDropdown && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Dropdown Item 1
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Dropdown Item 2
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Dropdown Item 3
          </Link>
        </div>
      )}
    </div>
  );
};

// Mobile Nav Item
const MobileNavItem = ({ text }) => {
  return (
    <Link
      to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
      className="block py-2 text-white hover:text-blue-200 transition-colors duration-300"
    >
      {text}
    </Link>
  );
};

export default Navbar;
