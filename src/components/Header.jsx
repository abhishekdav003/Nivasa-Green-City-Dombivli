import React, { useState, useEffect } from "react";
import { FaHome, FaCoins, FaSitemap, FaImages, FaYoutube } from "react-icons/fa";
import { FiWifi } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDownload } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
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

    return cleanupObserver;
  }, []);

  return (
    <div className="w-full lg:w-[78%] fixed top-0 left-0 z-70">
      <div className="flex h-19 flex-wrap md:flex-nowrap bg-white shadow-md">
        {/* Logo Section */}
        <div className="w-full  md:w-1/10 bg-white md:bg-black items-center border-r border-gray-300 flex justify-between md:justify-center relative px-1 py-1">
          <div className="flex items-center">
            <img
              src="/MainLogo.jpeg"
              alt="Balaji Estate"
              className="h-17 w-20 object-fit mr-2"
            />
            {/* <h1 className="font-bold text-lg hidden md:block">NIVASA</h1> */}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl border px-3 py-2 rounded-md text-gray-700 border-gray-200"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div
          className={`w-full md:w-full flex md:flex-nowrap flex-wrap md:justify-center transition-all duration-500 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
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
      </div>
    </div>
  );
};

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

export default Navbar;
