import React from 'react';

const RealEstateLanding = () => {
  return (
    <div className="min-h-screen w-full md:w-[77%] mt-10 bg-white shadow-lg flex flex-col">
      {/* Main Content Area */}
      <main className="flex-grow">
        {/* White Card Section */}
        <div className="bg-white p-14">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <img 
                src="/MainLogo.jpeg" 
                alt="Balaji Estate Logo" 
                className="mx-auto h-20 w-20" 
              />
              <p className="text-brown-600 uppercase tracking-wide font-medium mt-2">Balaji Estate</p>
            </div>
          </div>
          
          {/* About Section */}
          <h1 className="text-3xl font-bold mb-4">About Nivasa Green</h1>
          
          <p className="text-md text-gray-800 mb-6">
            Established in 2012, Nivasa Group has emerged as a distinguished name in real estate and is renowned for its impeccable construction standards. Expanding our footprint, we are now setting new benchmarks with residential projects in Mumbai, offering the same unwavering commitment to quality and innovation.

          </p>
          <p className="text-md text-gray-800 mb-6">
            With a steadfast commitment to integrity and diligence, we have earned recognition as one of best builders and developers. As we venture into new residential projects in Mumbai, our ethos revolves around prioritising customer satisfaction, driven by a dedicated team that understands and surpasses client expectations. Through transparency, adaptability, and innovation, we create living spaces that harmonise aesthetics with functionality, ensuring every detail reflects our pursuit of excellence.
          </p>
        </div>
      </main>
      
      {/* Authorization Details - Light Blue Section */}
      <div className="bg-blue-100 py-6 text-center">
        <p className="font-medium text-gray-800">Authorized Marketing Partner</p>
        <p className="text-gray-700">Marketing Partner RERA Number : A031332400291</p>
        <p className="text-gray-700">Project RERA Number : P51700080070</p>
        {/* <p className="text-gray-700">GST Number : 27AUJPK4730G1ZM</p> */}
        <p className="text-blue-600 mt-2">
          <a href="#" className="hover:underline">Disclaimer & Privacy Policy</a>
        </p>
        
        {/* QR Code */}
        <div className="flex justify-center mt-4">
          <img 
            src="/qr.jpeg" 
            alt="QR Code" 
            className="h-16 w-16" 
          />
        </div>
      </div>
      
      {/* Disclaimer Footer */}
      <footer className="bg-blue-100 py-2 px-4 md:px-8">
        <p className="text-xs text-gray-700 mb-1">
          <span className="font-semibold ">Disclaimer : </span>
          Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on the website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.
        </p>
        <p className="text-xs text-gray-700 mb-1">
          All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws.
        </p>
        <p className="text-xs text-gray-700">
          For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
        </p>
      </footer>
    </div>
  );
};

export default RealEstateLanding;