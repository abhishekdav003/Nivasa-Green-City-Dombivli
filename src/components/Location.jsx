import React from 'react';

export default function MapView() {
  return (
    <div id="location" className="relative shadow-md pl-4 mt-10 w-full bg-white p-8 md:w-[77%]">
      {/* Vertical "Gallery" text on right side */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
        <div className="transform translate-x-2 rotate-90 origin-center">
          <h2 className="text-3xl font-bold text-orange-500 whitespace-nowrap">Location</h2>
        </div>
      </div>
      
      {/* Map Container */}
      <div className="w-[88%] border border-gray-200 rounded-lg overflow-hidden mb-6">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7649287374793!2d73.08289007580835!3d19.20546694789421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf06bf49da95%3A0xa9841f9895bec38!2sNivasa%20Green%20City!5e0!3m2!1sen!2sin!4v1746164504757!5m2!1sen!2sin" 
          width="100%" 
          height="350" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Location Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {/* Feature 1 */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="ml-3 font-medium">Just 3 Mins From ORCHIDS The International School</p>
        </div>
        
        {/* Feature 2 */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="ml-3 font-medium">4 min Away Shree Gaondevi Mandir</p>
        </div>
        
        {/* Feature 3 */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="ml-3 font-medium">D-Mart in just 10 mins</p>
        </div>
        
        {/* Feature 4 */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="ml-3 font-medium">KDMC Ground 7 mins away</p>
        </div>
        
        {/* Feature 5 */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="ml-3 font-medium">Sai Jyot Hospital 6 mins away</p>
        </div>
      </div>
      
      
    </div>
  );
}