import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      const mobileNav = document.getElementById("mobile-menu");
      const hamburgerBtn = document.getElementById("hamburger-button");
      if (
        menuOpen &&
        mobileNav && 
        !mobileNav.contains(event.target) &&
        hamburgerBtn &&
        !hamburgerBtn.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    // Handle resize - close mobile menu on window resize
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  // Close mobile menu after navigation
  const handleNavigation = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed z-100 top-0 left-0 w-full z-50 md:w-[78%] transition-all duration-300 ${
          scrolled ? "bg-gray-200 shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
                          <Link to='/' className="cursor-pointer">

            <div className="flex items-center">
                <img
                  src="/white-logo.png"
                  alt="Company Logo"
                  className={`h-12 w-auto transition-all duration-300 ${
                    scrolled ? "h-10" : "h-12"
                  }`}
                  />
               
              <h1 className={`font-bold ml-3 transition-all duration-300 ${
                scrolled 
                  ? "text-gray-800 text-xl" 
                  : "text-gray-800 md:text-black text-2xl"
              }`}>
                NIVASA
              </h1>
            </div>
             </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                id="hamburger-button"
                onClick={toggleMenu}
                className={`text-2xl p-2 rounded-md border transition-all ${
                  scrolled 
                    ? "text-gray-700 border-gray-300 hover:bg-gray-100" 
                    : "text-black border-black/30 bg-black/10 hover:bg-black/20"
                }`}
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavItem 
                icon={<FaHome className="mr-2" />}
                label="Home"
                to="/"
                onClick={handleNavigation}
                scrolled={scrolled}
              />
              <NavItem 
                icon={<FaInfoCircle className="mr-2" />}
                label="About"
                to="/about"
                onClick={handleNavigation}
                scrolled={scrolled}
              />
              <NavItem 
                icon={<FaConciergeBell className="mr-2" />}
                label="Amenities"
                to="/amenities"
                onClick={handleNavigation}
                scrolled={scrolled}
              />
              <NavItem 
                icon={<FaEnvelope className="mr-2" />}
                label="Contact Us"
                to="/contact"
                onClick={handleNavigation}
                scrolled={scrolled}
                isButton={true}
              />
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out absolute w-full shadow-lg ${
            menuOpen 
              ? "max-h-screen opacity-100 visible bg-white" 
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="flex flex-col w-full">
            <MobileNavItem
              icon={<FaHome />}
              label="Home"
              to="/"
              onClick={handleNavigation}
            />
            <MobileNavItem
              icon={<FaInfoCircle />}
              label="About"
              to="/about"
              onClick={handleNavigation}
            />
            <MobileNavItem
              icon={<FaConciergeBell />}
              label="Amenities"
              to="/amenities"
              onClick={handleNavigation}
            />
            <MobileNavItem
              icon={<FaEnvelope />}
              label="Contact Us"
              to="/contact"
              onClick={handleNavigation}
              isLast={true}
            />
          </div>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

// Desktop Navigation Item
const NavItem = ({ icon, label, to, onClick, scrolled, isButton }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`
      cursor-pointer px-4 py-2 rounded-md flex items-center transition-all duration-200
      ${isButton 
        ? (scrolled 
            ? "bg-orange-500 text-white hover:bg-orange-600" 
            : "bg-orange-400 text-white hover:bg-orange-500")
        : (scrolled 
            ? "text-gray-700 hover:bg-gray-100" 
            : "text-black hover:bg-black/10")
      }
    `}
  >
    <span className="flex items-center text-sm font-medium">
      {icon}
      {label}
    </span>
  </Link>
);

// Mobile Navigation Item
const MobileNavItem = ({ icon, label, to, onClick, isLast }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`
      py-4 px-6 flex items-center cursor-pointer transition-all duration-200
      ${!isLast ? "border-b border-gray-100" : ""}
      ${"bg-white text-gray-700 hover:bg-gray-50"}
    `}
  >
    <div className="text-lg mr-3">{icon}</div>
    <p className="text-base font-medium">{label}</p>
  </Link>
);

export default Navbar;