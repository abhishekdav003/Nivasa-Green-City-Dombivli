import React from 'react';

const SiteFloorPlanComponent = () => {
  return (
    <section id="site" className="bg-white shadow-md w-full mt-10 md:w-[77%] p-8 relative">
      <div className="flex flex-col md:flex-row">
        {/* Master Plan Section */}
        <div className="w-full md:w-[29%] p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Master Plan</h2>
          <div>
            <img
              src="/photo1.jpg"
              alt="Master Plan"
              className="w-full border border-gray-200"
            />
          </div>
        </div>
        
        {/* Floor Plans Section */}
        <div className="w-full md:w-[60%] p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Floor Plan</h2>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            {/* 1 BHK Floor Plan */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="flex flex-col h-full">
                <div className="border border-gray-300 flex-grow">
                  <img
                    src="/photo1.jpg"
                    alt="1 BHK Floor Plan"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-orange-500 text-white text-center py-3">
                  <span className="text-xl font-medium">1 BHK</span>
                </div>
              </div>
            </div>
            
            {/* 2 BHK Floor Plan */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col h-full">
                <div className="border border-gray-300 flex-grow">
                  <img
                    src="/photo1.jpg"
                    alt="2 BHK Floor Plan"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-orange-500 text-white text-center py-3">
                  <span className="text-xl font-medium">2 BHK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vertical "Site & Floor Plan" text */}
        <div className="hidden md:block absolute right-0 top-50">
          <div className="transform translate-x-18 rotate-90 origin-center">
            <h2 className="text-3xl font-bold  text-orange-500 right-0">Site & Floor Plan</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteFloorPlanComponent;