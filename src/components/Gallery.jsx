import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'carousel', 'fullscreen'
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  
  // Gallery images data
  const galleryImages = [
    // Row 1
    {
      id: 1,
      alt: "Aerial view of property",
      src: "/photo1.jpg",
      category: "Exterior"
    },
    {
      id: 2,
      alt: "Building towers view",
      src: "/photo2.jpg",
      category: "Exterior"
    },
    {
      id: 3,
      alt: "Entrance lobby night view",
      src: "/photo4.jpg",
      category: "Interior"
    },
    {
      id: 4,
      alt: "Building sunset view",
      src: "/photo5.jpg",
      category: "Exterior"
    },
    // Row 2
    {
      id: 5,
      alt: "Community road",
      src: "/photo6.jpg",
      category: "Amenities"
    },
    {
      id: 6,
      alt: "Amenities deck",
      src: "/photo7.jpg",
      category: "Amenities"
    },
    {
      id: 7,
      alt: "Bedroom interior",
      src: "/photo1.jpg",
      category: "Interior"
    },
    {
      id: 8,
      alt: "Restaurant interior",
      src: "/photo2.jpg",
      category: "Interior"
    }
  ];

  // Check device size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768 && viewMode === 'grid') {
        setViewMode('carousel');
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [viewMode]);

  // Keyboard navigation for fullscreen mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode === 'fullscreen') {
        if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'Escape') {
          setViewMode('grid');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [viewMode, activeIndex]);

  // Smooth scroll to active image in carousel mode
  useEffect(() => {
    if (carouselRef.current && viewMode === 'carousel') {
      const scrollPosition = activeIndex * (isMobile ? window.innerWidth : 320);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex, viewMode, isMobile]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openFullscreen = (index) => {
    setActiveIndex(index);
    setViewMode('fullscreen');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeFullscreen = () => {
    setViewMode(isMobile ? 'carousel' : 'grid');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'carousel' : 'grid');
  };

  // Render gallery based on view mode
  const renderGallery = () => {
    switch(viewMode) {
      case 'fullscreen':
        return (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="absolute top-4 right-4 flex space-x-4">
              <button 
                onClick={closeFullscreen}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <X size={24} />
              </button>
            </div>
            
            <button 
              onClick={goToPrevious}
              className="absolute left-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="w-full h-full flex items-center justify-center p-8">
              <img 
                src={galleryImages[activeIndex].src} 
                alt={galleryImages[activeIndex].alt} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            >
              <ChevronRight size={32} />
            </button>
            
            <div className="absolute bottom-8 left-0 right-0">
              <div className="flex justify-center items-center">
                <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full">
                  <p className="font-medium">{galleryImages[activeIndex].alt}</p>
                  <p className="text-sm text-gray-300">{galleryImages[activeIndex].category}</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto py-2 px-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-white scale-110' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'carousel':
        return (
          <div className="w-full">
            <div className="relative">
              <div 
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="snap-center shrink-0 w-full md:w-80 px-2"
                  >
                    <div 
                      className="relative overflow-hidden rounded-lg shadow-lg"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white font-bold">{image.alt}</p>
                          <p className="text-gray-200 text-sm">{image.category}</p>
                        </div>
                        <button 
                          onClick={() => openFullscreen(index)}
                          className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white"
                        >
                          <Maximize size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        );
      
      default: // grid
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
                onClick={() => openFullscreen(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold">{image.alt}</p>
                    <p className="text-gray-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div id="gallery" className="w-full md:w-[78%] py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-800">
            Our Gallery
          </h2>
          
          {!isMobile && (
            <button 
              onClick={toggleViewMode}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all text-sm font-medium text-gray-700"
            >
              {viewMode === 'grid' ? 'View as Carousel' : 'View as Grid'}
            </button>
          )}
        </div>
        
        {renderGallery()}
      </div>
    </div>
  );
};

export default Gallery;