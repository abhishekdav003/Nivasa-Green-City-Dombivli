import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const AmenitiesSlider = () => {
  // Include the amenities from the image plus add some additional ones
  const amenities = [
    { left: 'INDOOR GAMES', right: 'CHILDREN PLAY AREA' },
    { left: 'BANQUET HALL', right: 'CROSS FIT AREA' },
    { left: 'MINI THEATRE', right: 'YOGA / MEDITATION CENTER' },
    { left: 'SWIMMING POOL', right: 'JOGGING TRACK' },
    { left: 'GYMNASIUM', right: 'BBQ AREA' },
    { left: 'GARDEN AREA', right: 'SENIOR CITIZEN ZONE' },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(amenities.length / 3);
  const slideInterval = useRef(null);
  
  // Auto-slide functionality
  useEffect(() => {
    startSlideTimer();
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide]);
  
  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      startSlideTimer();
    }
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      startSlideTimer();
    }
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      startSlideTimer();
    }
  };
  
  // Get visible amenities for current slide (3 items per slide)
  const visibleAmenities = amenities.slice(currentSlide * 3, (currentSlide * 3) + 3);
  
  return (
    <div id="amenities" className=" shadow-md relative mt-10 w-full p-8 md:w-[77%] bg-white">
      {/* Vertical "Amenities" text on right side */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
        <div className="transform translate-x-7 rotate-90 origin-center">
          <h2 className="text-3xl font-bold text-orange-500 whitespace-nowrap">Amenities</h2>
        </div>
      </div>
      
      {/* Left navigation arrow */}
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} className="text-orange-500" />
      </button>
      
      {/* Amenities content */}
      <div className="max-w-5xl px-6 mx-auto  relative">
        {visibleAmenities.map((amenity, index) => (
          <div key={index} className="flex flex-col md:flex-row border-b border-gray-200 py-4">
            <div className="w-full md:w-1/2 flex items-center space-x-4 py-2">
              <Check size={24} className="text-gray-800" />
              <span className="font-medium text-gray-800 text-lg tracking-wide">{amenity.left}</span>
            </div>
            <div className="w-full md:w-1/2 flex items-center space-x-4 py-2">
              <Check size={24} className="text-gray-800" />
              <span className="font-medium text-gray-800 text-lg tracking-wide">{amenity.right}</span>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-6 bg-orange-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Right navigation arrow */}
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={nextSlide}
      >
        <ChevronRight size={24} className="text-orange-500" />
      </button>
    </div>
  );
};

export default AmenitiesSlider;