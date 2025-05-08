import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {HiArrowRight } from 'react-icons/hi';


const AmenitiesPage = () => {
  // Enhanced amenities with images and descriptions
  const amenities = [
    {
      image: "/indore.jpg",
      altText: "Indoor Games Facility",
      name: "INDOOR GAMES",
      description: "Equipped recreational area for table tennis, carrom, chess and more",
      featured: true
    },
    {
      image: "/child.jpg",
      altText: "Children's Play Area",
      name: "CHILDREN PLAY AREA",
      description: "Safe and engaging space designed for children of all ages",
      featured: false
    },
    {
      image: "/hall.jpg",
      altText: "Elegant Banquet Hall",
      name: "BANQUET HALL",
      description: "Spacious venue for community gatherings and private events",
      featured: true
    },
    {
      image: "/gym.jpg",
      altText: "Cross Fit Training Area",
      name: "CROSS FIT AREA",
      description: "Dedicated space for high-intensity functional training",
      featured: false
    },
    {
      image: "/theatre.jpg",
      altText: "Mini Theatre",
      name: "MINI THEATRE",
      description: "Cozy entertainment space for movie screenings and presentations",
      featured: true
    },
    {
      image: "yogo.jpg",
      altText: "Yoga and Meditation Center",
      name: "YOGA / MEDITATION CENTER",
      description: "Peaceful sanctuary for mindfulness and relaxation",
      featured: false
    },
    {
      image: "/pool.jpg",
      altText: "Swimming Pool",
      name: "SWIMMING POOL",
      description: "Temperature-controlled pool with dedicated lanes and lounging area",
      featured: true
    },
    {
      image: "/track.htm",
      altText: "Jogging Track",
      name: "JOGGING TRACK",
      description: "Landscaped pathway for walking, jogging and running exercises",
      featured: false
    },
    {
      image: "/modern.jpeg",
      altText: "Modern Gymnasium",
      name: "GYMNASIUM",
      description: "State-of-the-art fitness center with modern equipment",
      featured: true
    },
    {
      image: "/bbq.htm",
      altText: "BBQ Area",
      name: "BBQ AREA",
      description: "Outdoor space for grilling and social gatherings",
      featured: false
    },
    {
      image: "/garden.jpg",
      altText: "Garden Area",
      name: "GARDEN AREA",
      description: "Lush green spaces with seasonal flowers and seating arrangements",
      featured: false
    },
    {
      image: "/senior.jpg",
      altText: "Senior Citizen Zone",
      name: "SENIOR CITIZEN ZONE",
      description: "Thoughtfully designed area for relaxation and activities for seniors",
      featured: false
    },
    {
      image: "/cafe.jpg",
      altText: "Cafeteria",
      name: "CAFETERIA",
      description: "Convenient spot for refreshments and casual meetings",
      featured: false
    },
    {
      image: "/mhall.jpg",
      altText: "Multipurpose Hall",
      name: "MULTIPURPOSE HALL",
      description: "Versatile space for community events and celebrations",
      featured: false
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleAmenities, setVisibleAmenities] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  
  // Filter categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'recreation', name: 'Recreation' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'community', name: 'Community' }
  ];
  
  // Filtered amenities logic
  useEffect(() => {
    let filtered = amenities;
    
    if (activeCategory === 'fitness') {
      filtered = amenities.filter(item => 
        ['CROSS FIT AREA', 'YOGA / MEDITATION CENTER', 'SWIMMING POOL', 'JOGGING TRACK', 'GYMNASIUM'].includes(item.name)
      );
    } else if (activeCategory === 'recreation') {
      filtered = amenities.filter(item => 
        ['INDOOR GAMES', 'CHILDREN PLAY AREA', 'MINI THEATRE', 'BBQ AREA', 'GARDEN AREA'].includes(item.name)
      );
    } else if (activeCategory === 'community') {
      filtered = amenities.filter(item => 
        ['BANQUET HALL', 'SENIOR CITIZEN ZONE', 'CAFETERIA', 'MULTIPURPOSE HALL'].includes(item.name)
      );
    }
    
    setVisibleAmenities(filtered);
    setCurrentPage(0); // Reset to first page when category changes
  }, [activeCategory]);
  
  // Pagination logic
  const pageAmenities = visibleAmenities.slice(
    currentPage * itemsPerPage,
    (currentPage * itemsPerPage) + itemsPerPage
  );
  
  const nextPage = () => {
    if (currentPage < Math.ceil(visibleAmenities.length / itemsPerPage) - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };
  
  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 w-full md:w-[78%]">
      <div className="bg-gray-800 mb-12 text-white">
              <div className="container mx-auto px-4 md:py-12">
                <h1 className="text-2xl md:text-4xl font-bold">Pricing & Floor Plans</h1>
                <div className="flex items-center text-sm mt-2">
                  <a href="/" className="text-gray-300 hover:text-white">Home</a>
                  <HiArrowRight className="mx-2" />
                  <span className="text-orange-400">Amenities</span>
                </div>
              </div>
            </div>
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Exceptional Amenities</h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Experience luxury living with our thoughtfully designed amenities that elevate everyday living.
            Each feature has been meticulously crafted to enhance your lifestyle and provide unparalleled comfort.
          </p>
        </div>
        
        {/* Featured Amenities Carousel */}
        <div className="relative overflow-hidden mb-24 rounded-xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/1 to-orange-400/30 z-10"></div>
          <img 
            src="/amenLogo.png" 
            alt="Featured Amenity" 
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <div className="max-w-lg">
                <span className="inline-block px-4 py-1 bg-white text-orange-500 rounded-full text-sm font-semibold mb-4">Featured Amenity</span>
                <h3 className="text-4xl font-bold text-white mb-4">Premium Lifestyle</h3>
                <p className="text-white/90 text-lg mb-6">
                  Our amenities are designed to provide you with comfort, convenience, and luxury at every turn.
                  Discover a lifestyle where every detail is crafted for your enjoyment.
                </p>
                <button className="px-6 py-3 bg-white text-orange-500 rounded-md hover:bg-gray-100 transition-colors flex items-center font-medium">
                  Explore All Amenities <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-md transition-all text-lg ${
                activeCategory === category.id 
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500 shadow'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pageAmenities.map((amenity, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={amenity.image} 
                  alt={amenity.altText}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {amenity.featured && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                  <button className="text-orange-500 font-medium flex items-center group-hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {visibleAmenities.length > itemsPerPage && (
          <div className="flex justify-center items-center space-x-6 mt-14">
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center justify-center w-12 h-12 rounded-md ${
                currentPage === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              } shadow-lg transition-colors`}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(visibleAmenities.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-12 h-12 flex items-center justify-center rounded-md transition-all font-medium ${
                    currentPage === index 
                      ? 'bg-orange-500 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextPage}
              disabled={currentPage >= Math.ceil(visibleAmenities.length / itemsPerPage) - 1}
              className={`flex items-center justify-center w-12 h-12 rounded-md ${
                currentPage >= Math.ceil(visibleAmenities.length / itemsPerPage) - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              } shadow-lg transition-colors`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
        
        
        
      </div>
    </div>
  );
};

export default AmenitiesPage;