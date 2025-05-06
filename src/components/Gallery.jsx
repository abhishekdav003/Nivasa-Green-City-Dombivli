import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryComponent = () => {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Gallery images data
  const galleryImages = [
    // Row 1
    {
      id: 1,
      alt: "Aerial view of property",
      src: "/photo1.jpg"
    },
    {
      id: 2,
      alt: "Building towers view",
      src: "/photo2.jpg"
    },
    {
      id: 3,
      alt: "Entrance lobby night view",
      src: "/photo4.jpg"
    },
    {
      id: 4,
      alt: "Building sunset view",
      src: "/photo5.jpg"
    },
    // Row 2
    {
      id: 5,
      alt: "Community road",
      src: "/photo6.jpg"
    },
    {
      id: 6,
      alt: "Amenities deck",
      src: "/photo7.jpg"
    },
    {
      id: 7,
      alt: "Bedroom interior",
      src: "/photo1.jpg"
    },
    {
      id: 8,
      alt: "Restaurant interior",
      src: "/photo2.jpg"
    }
  ];

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // For mobile view: 2 images at a time
  const imagesPerMobilePage = 2;
  const totalMobilePages = Math.ceil(galleryImages.length / imagesPerMobilePage);

  // Navigation functions for mobile
  const goToPrevious = () => {
    setCurrentMobileIndex((prevIndex) => 
      prevIndex === 0 ? totalMobilePages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentMobileIndex((prevIndex) => 
      prevIndex === totalMobilePages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="gallery" className="relative mt-10 shadow-md bg-white w-full md:w-[77%] py-6">
      {/* Vertical "Gallery" text on right side */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
        <div className="transform rotate-90 origin-center">
          <h2 className="text-3xl font-bold text-orange-500 whitespace-nowrap">Gallery</h2>
        </div>
      </div>
      
      {/* Desktop View - All images shown at once */}
      <div className={`max-w-6xl mx-auto px-4 ${isMobile ? 'hidden' : 'block'}`}>
        <div className="grid grid-cols-4 gap-4">
          {galleryImages.slice(0, 4).map((image) => (
            <div key={image.id} className="overflow-hidden rounded-sm">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-4 mt-4">
          {galleryImages.slice(4, 8).map((image) => (
            <div key={image.id} className="overflow-hidden rounded-sm">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile View - 2 images at a time with navigation */}
      {isMobile && (
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Left navigation button */}
          <button 
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronLeft size={24} className="text-orange-500" />
          </button>
          
          {/* Current mobile images */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages
              .slice(
                currentMobileIndex * imagesPerMobilePage, 
                (currentMobileIndex * imagesPerMobilePage) + imagesPerMobilePage
              )
              .map((image) => (
                <div key={image.id} className="overflow-hidden rounded-sm">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
          </div>
          
          {/* Right navigation button */}
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronRight size={24} className="text-orange-500" />
          </button>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalMobilePages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMobileIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentMobileIndex === index ? 'w-6 bg-orange-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;