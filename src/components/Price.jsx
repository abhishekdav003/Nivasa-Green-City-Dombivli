import React, { useState } from 'react';
import { HiCurrencyRupee } from 'react-icons/hi';

// Sample data based on the image
const pricingData = [
  { type: '1 BHK', area: 'On Request', price: '₹ 29.99 Lacs*' },
  { type: '2 BHK', area: 'On Request', price: '₹ 41.99 Lacs*' },
];

const PricingComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleFormOpen = () => {
    setShowForm(true);
    // In a real implementation, this would open a form
    alert('This would open the costing details form');
  };

  return (
    <section id="price" className="pt-3 px-4 md:pr-4 bg-gray-50 w-full lg:w-[78%]">
      <div className="bg-white p-6 md:p-10">
        <div className="flex flex-row relative justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">---&gt; ---&gt;</h2>
          
        </div>
        <div className="hidden md:block text-orange-500 absolute right-[20%] text-4xl font-bold transform -rotate-270 mt-6"> Area & Price</div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Table View */}
          <div className="w-full  lg:w-[56%]">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-white text-gray-700">
                  <th className="p-4 border border-gray-300 text-lg">Residences</th>
                  <th className="p-4 border border-gray-300 text-lg">Carpet Area</th>
                  <th className="p-4 border border-gray-300 text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className="p-4 border border-gray-300 text-lg font-medium">{item.type}</td>
                    <td className="p-4 border border-gray-300">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded">
                        {item.area}
                      </span>
                    </td>
                    <td className="p-4 border border-gray-300 text-lg font-medium">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Costing Image + Button */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="border border-gray-300 flex-grow">
              <img
                src="/api/placeholder/400/320"
                alt="Costing Details Form Sample"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div
              className="relative bg-orange-500 text-white text-center py-4 cursor-pointer overflow-hidden group"
              onClick={handleFormOpen}
            >
              <span className="text-xl font-medium relative z-10">Complete Costing Details</span>
              
              {/* Metallic shine effect */}
              <div 
                className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full transform group-hover:translate-x-full transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;