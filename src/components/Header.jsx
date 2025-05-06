import React, { useState, useEffect } from "react";
import { FaHome, FaCoins, FaSitemap, FaImages, FaYoutube } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDownload } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import DownloadForm from "./DownloadForm"; // Import your DownloadForm component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showDownloadForm, setShowDownloadForm] = useState(false); // State to control form visibility

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // Toggle download form visibility
  const toggleDownloadForm = () => {
    setShowDownloadForm(!showDownloadForm);
    
    // If on mobile, close the menu when opening the form
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    // Special handling for brochure section
    if (sectionId === "brochure") {
      toggleDownloadForm();
      return;
    }
    
    const offset = 50; // Adjust header height if needed

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionPosition =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: "smooth",
        });
      }

      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    }, 100);
  };

  const observeSections = () => {
    const sections = [
      "home",
      "price",
      "site",
      "amenities",
      "gallery",
      "location",
      "virtual-tour",
      "brochure",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  };

  useEffect(() => {
    const cleanupObserver = observeSections();

    const sections = [
      "home",
      "price",
      "site",
      "amenities",
      "gallery",
      "location",
      "virtual-tour",
      "brochure",
    ];
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.7) {
          setActiveSection(id);
          break;
        }
      }
    }

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
      cleanupObserver();
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="w-full lg:w-[78%] fixed top-0 left-0 z-70">
        <div className="flex h-auto md:h-15 flex-wrap md:flex-nowrap bg-white shadow-md">
          {/* Logo and Toggle Button Section */}
          <div className="w-full md:w-1/10 bg-white md:bg-black items-center border-r border-gray-300 flex justify-between md:justify-center relative p-3 md:p-1">
            <div className="flex items-center">
              <img
                src="/MainLogo.jpeg"
                alt="Balaji Estate"
                className="h-12 md:h-15 w-16 md:w-20 object-fit mr-2"
              />
              {/* <h1 className="font-bold text-lg hidden md:block">NIVASA</h1> */}
            </div>

            <div className="md:hidden">
              <button
                id="hamburger-button"
                onClick={toggleMenu}
                className="text-2xl border p-2 rounded-md text-gray-700 border-gray-300 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex md:w-full md:flex-nowrap md:justify-center">
            <MenuItem
              icon={<FaHome />}
              label=""
              sectionId="home"
              active={activeSection === "home"}
              onClick={scrollToSection}
              width="w-[10%]"
            />
            <MenuItem
              icon={<FaCoins />}
              label="Price"
              sectionId="price"
              active={activeSection === "price"}
              onClick={scrollToSection}
              width="w-[13%]"
            />
            <MenuItem
              icon={<FaSitemap />}
              label="Site & Floor Plan"
              sectionId="site"
              active={activeSection === "site"}
              onClick={scrollToSection}
              width="w-[22%]"
            />
            <MenuItem
              icon={<FiWifi />}
              label="Amenities"
              sectionId="amenities"
              active={activeSection === "amenities"}
              onClick={scrollToSection}
              width="w-[15%]"
            />
            <MenuItem
              icon={<FaImages />}
              label="Gallery"
              sectionId="gallery"
              active={activeSection === "gallery"}
              onClick={scrollToSection}
              width="w-[14%]"
            />
            <MenuItem
              icon={<IoLocationSharp />}
              label="Location"
              sectionId="location"
              active={activeSection === "location"}
              onClick={scrollToSection}
              width="w-[14%]"
            />
            <MenuItem
              icon={<FaYoutube />}
              label="Virtual Tour"
              sectionId="virtual-tour"
              active={activeSection === "virtual-tour"}
              onClick={scrollToSection}
              width="w-[17%]"
            />
            <MenuItem
              icon={<MdOutlineDownload />}
              label="Brochure"
              sectionId="brochure"
              active={activeSection === "brochure"}
              onClick={scrollToSection}
              width="w-[14%]"
            />
          </div>
          
          {/* Mobile Navigation Menu */}
          <div 
            id="mobile-menu"
            className={`w-full md:hidden transition-all duration-300 ease-in-out absolute top-full left-0 shadow-lg ${
              menuOpen 
                ? "max-h-screen opacity-100 visible bg-white" 
                : "max-h-0 opacity-0 invisible overflow-hidden"
            }`}
          >
            <div className="flex flex-col w-full">
              <MobileMenuItem
                icon={<FaHome />}
                label="Home"
                sectionId="home"
                active={activeSection === "home"}
                onClick={scrollToSection}
              />
              <MobileMenuItem
                icon={<FaCoins />}
                label="Price"
                sectionId="price"
                active={activeSection === "price"}
                onClick={scrollToSection}
              />
              <MobileMenuItem
                icon={<FaSitemap />}
                label="Site & Floor Plan"
                sectionId="site"
                active={activeSection === "site"}
                onClick={scrollToSection}
              />
              <MobileMenuItem
                icon={<FiWifi />}
                label="Amenities"
                sectionId="amenities"
                active={activeSection === "amenities"}
                onClick={scrollToSection}
              />
              <MobileMenuItem
                icon={<FaImages />}
                label="Gallery"
                sectionId="gallery"
                active={activeSection === "gallery"}
                onClick={scrollToSection}
              />
              <MobileMenuItem
                icon={<IoLocationSharp />}
                label="Location"
                sectionId="location"
                active={activeSection === "location"}
                onClick={scrollToSection}
              />
              <MobileMenuItem
                icon={<FaYoutube />}
                label="Virtual Tour"
                sectionId="virtual-tour"
                active={activeSection === "virtual-tour"}
                onClick={scrollToSection}
              />
              <MobileMenuItem
                icon={<MdOutlineDownload />}
                label="Brochure"
                sectionId="brochure"
                active={activeSection === "brochure"}
                onClick={scrollToSection}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Download Form Modal */}
      {showDownloadForm && (
  <DownloadForm handleClose={toggleDownloadForm} />
)}
    </>
  );
};

// Desktop menu item
const MenuItem = ({ icon, label, sectionId, active, onClick, width }) => (
  <div
    onClick={() => onClick(sectionId)}
    className={`px-4 py-2 border-r flex justify-center items-center cursor-pointer ${width} ${
      active ? "bg-black text-white" : "bg-white text-gray-700"
    }`}
  >
    <div className="text-lg md:text-xl 2xl:text-2xl">{icon}</div>
    <p className="px-1 text-sm 2xl:text-lg">{label}</p>
  </div>
);

// Mobile menu item - separate component for mobile styling
const MobileMenuItem = ({ icon, label, sectionId, active, onClick }) => (
  <div
    onClick={() => onClick(sectionId)}
    className={`py-3 px-5 flex items-center border-b border-gray-100 cursor-pointer transition-all duration-200 ${
      active ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-50"
    }`}
  >
    <div className="text-xl mr-3">{icon}</div>
    <p className="text-base font-medium">{label}</p>
  </div>
);

export default Navbar;