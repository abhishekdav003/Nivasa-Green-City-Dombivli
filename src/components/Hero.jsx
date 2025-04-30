import React, { useState, useEffect } from "react";
import BannerImage from "/photo1.jpg"; // First image
import BannerImage2 from "/photo2.jpg"; // Second image - make sure to add this file
import "./DownloadBrochureButton.css";
import { HiDownload } from "react-icons/hi";
import DownloadForm from "./DownloadForm";
import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";


function Hero() {
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of banner images for the slider
  const bannerImages = [BannerImage, BannerImage2];

  // Effect for auto-sliding images every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleFormToggle = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative w-full lg:w-[78%] overflow-hidden bg-white flex flex-col justify-start items-center">
      {/* Banner image wrapper with relative position for overlay */}
      <div className="relative w-full">
        {/* Show ProjectCard only on large screens */}
        <div className="hidden md:block absolute top-4 left-4 z-50">
          <ProjectCard />
        </div>

        {/* Image Slider - Simplified approach */}
        <div className="relative w-full" style={{ height: "auto" }}>
          {/* First Image - Always present, opacity changes */}
          <img
            src={BannerImage}
            alt="Banner 1"
            className="w-full max-h-[800px] object-cover transition-opacity duration-1000"
            style={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
          />
          
          {/* Second Image - Always present, opacity changes */}
          <img
            src={BannerImage2}
            alt="Banner 2"
            className="w-full max-h-[800px] object-cover absolute top-0 left-0 transition-opacity duration-1000"
            style={{ opacity: currentImageIndex === 1 ? 1 : 0 }}
          />
        </div>

        <div className="md:hidden p-3">
          <ProjectCardMobile />
        </div>
      </div>

      

      {/* Download Form */}
      {showForm && <DownloadForm handleClose={handleCloseForm} />}
    </div>
  );
}

export default Hero;