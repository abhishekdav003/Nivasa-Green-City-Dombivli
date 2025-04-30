import React from 'react';

export default function BalajEstateC3() {
  return (
    <div className="w-full lg:w-[78%] mt-25 p-4 font-sans">
      <div className="relative">
        {/* Sidebar "overview" text - visible on larger screens */}
        <div className="hidden lg:block absolute right-0 top-0 transform rotate-90 origin-top-right text-orange-500 uppercase font-bold text-4xl mt-24">
          overview
        </div>
        
        {/* Main Content */}
        <div className="pr-6 ">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">Balaji Estate C3</h1>
            <h2 className="text-2xl md:text-3xl text-orange-500">At Dombivli East</h2>
          </div>

          {/* Description Sections */}
          <div className="space-y-6 mb-8 max-w-4xl">
            <p className="text-lg">
              Codename Chapter Three at Balaji Estates is a vast modern township consisting of 5+ towers. Sai Balaji Estate offers exclusive 1 and 2 BHK apartments in the prime hub of Mumbai city, Dombivli.
            </p>
            <p className="text-lg">
              The apartments are large, open and airy with interiors that are polished and classy. The residences at Balaji Estate Phase 3 are especially known for their spacious layouts, good floor-ceiling ratio, edge-to-edge utilization of space and much more. Investing in a home at Balaji Estate Phase 3 will guarantee prospective residents a steady capital appreciation and good futuristic returns.
            </p>
          </div>

          {/* Download Brochure Button */}
          <div className="mb-12">
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded flex items-center hover:bg-orange-500 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Brochure
            </button>
          </div>

          {/* Project Highlights */}
          <div className="mb-8">
            <h2 className="text-3xl text-orange-500 text-center mb-6">Project Highlights</h2>
            
            <div className="border rounded overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    "C3-Life of joy (Chapter Three)",
                    "35+ Acres Land",
                    "Ground + 23 And 28 Habitable Floors",
                    "Sample Flat Ready",
                    "KDMC & MahaRERA Approved",
                    "All Flats Are Vastu Compliant"
                  ].map((highlight, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 border-b">
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-green-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-lg">{highlight}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}