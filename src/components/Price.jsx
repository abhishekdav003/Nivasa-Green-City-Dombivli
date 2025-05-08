import React, { useState, useEffect } from 'react';
import { HiOutlineCurrencyRupee, HiArrowRight, HiChevronDown, HiPhone, HiMail } from 'react-icons/hi';
import { HiOutlineDocumentText, HiOutlineHome } from 'react-icons/hi';

// Import the updated DownloadForm component
import DownloadForm from './DownloadForm';
import RequestCallBack from './RequestCallBack';
import ContactForm from './ContactForm';

// In a multi-page app, this data would likely come from an API or context
const pricingData = [
  { 
    id: 1,
    type: '1 BHK', 
    area: '650 sq.ft', 
    price: '54.99', 
    available: true,
    features: ['Modular Kitchen', 'Premium Flooring', 'Power Backup']
  },
  { 
    id: 2,
    type: '2 BHK', 
    area: '950 sq.ft', 
    price: '79.99', 
    available: true,
    features: ['Modular Kitchen', 'Premium Flooring', 'Power Backup', 'Balcony']
  },
  { 
    id: 3,
    type: '3 BHK', 
    area: '1250 sq.ft', 
    price: '109.99', 
    available: true,
    features: ['Modular Kitchen', 'Premium Flooring', 'Power Backup', 'Balcony', 'Servant Room']
  },
];



const PricingPage = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [showRequestCallBack, setShowRequestCallBack] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [activeTab, setActiveTab] = useState('pricing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // This simulates loading data from an API when the page loads
  useEffect(() => {
    // In a real app, you would fetch data here
    console.log('Page loaded, data fetched');
  }, []);

  const openModal = (unit = null) => {
    setSelectedUnit(unit);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDownloadBrochure = () => {
    // Open the DownloadForm modal
    setShowDownloadForm(true);
  };
  const handleRequestCallBack = () => {
    setShowRequestCallBack(true);
  }

  const handleContactForm = () => {
    setShowContactForm(true)
  }
  // Fixed the function name used in the component
  const closeDownloadForm = () => {
    console.log("Download form closed"); // Debug log to verify function is called
    setShowDownloadForm(false);
  };

  const closeRequestCallBack = () => {
    setShowRequestCallBack(false);
  }

  const closeContactForm = () => {
    setShowContactForm(false);
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen w-full md:w-[78%] bg-gray-50">
      

      {/* Page Title Section */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-2xl md:text-4xl font-bold">Pricing & Floor Plans</h1>
          <div className="flex items-center text-sm mt-2">
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
            <HiArrowRight className="mx-2" />
            <span className="text-orange-400">About</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200 mb-6 md:mb-8">
          <button
            className={`py-2 px-4 md:py-3 md:px-6 font-medium whitespace-nowrap ${activeTab === 'pricing' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('pricing')}
          >
            Pricing
          </button>
          <button
            className={`py-2 px-4 md:py-3 md:px-6 font-medium whitespace-nowrap ${activeTab === 'floorplans' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('floorplans')}
          >
            Floor Plans
          </button>
          <button
            className={`py-2 px-4 md:py-3 md:px-6 font-medium whitespace-nowrap ${activeTab === 'features' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('features')}
          >
            Features & Amenities
          </button>
        </div>

        {/* Pricing Tab Content */}
        {activeTab === 'pricing' && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800">Price List & Availability</h2>
                  <p className="text-gray-600 mt-1 md:mt-2">Updated as of May 2025</p>
                </div>
                <div className="flex flex-col sm:flex-row mt-4 md:mt-0 sm:space-x-3 space-y-2 sm:space-y-0">
                  <button 
                    onClick={handleDownloadBrochure}
                    className="flex items-center justify-center text-gray-700 hover:text-orange-500 border border-gray-300 px-3 py-2 rounded transition duration-300"
                  >
                    <HiOutlineDocumentText className="mr-2" />
                    <span>Download Brochure</span>
                  </button>
                  <button 
                    onClick={handleRequestCallBack}
                    className="flex items-center justify-center text-gray-700 hover:text-orange-500 border border-gray-300 px-3 py-2 rounded transition duration-300"
                  >
                    <HiPhone className="mr-2" />
                    <span>Request Callback</span>
                  </button>
                </div>
              </div>
              
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Unit Type</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Carpet Area</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Price (Lacs)</th>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Status</th>
                      <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((item, index) => (
                      <tr key={item.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="py-4 px-4 font-medium">{item.type}</td>
                        <td className="py-4 px-4">{item.area}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <HiOutlineCurrencyRupee className="text-orange-500" size={20} />
                            <span className="font-semibold">{item.price} Lacs*</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {item.available ? 'Available' : 'Sold Out'}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button
                            onClick={handleContactForm}
                            className={`
                              py-2 px-4 rounded text-sm transition duration-300
                              ${item.available 
                                ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'}
                            `}
                            disabled={!item.available}
                          >
                            Get Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4">
                {pricingData.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{item.type}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {item.available ? 'Available' : 'Sold Out'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carpet Area:</span>
                        <span className="font-medium">{item.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <div className="flex items-center">
                          <HiOutlineCurrencyRupee className="text-orange-500" />
                          <span className="font-semibold">{item.price} Lacs*</span>
                        </div>
                      </div>
                      <button
                        onClick={() => openModal(item)}
                        className={`w-full mt-3 py-2 px-4 rounded text-center ${
                          item.available
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        } transition duration-300`}
                        disabled={!item.available}
                      >
                        {item.available ? 'Request Details' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                * Prices are indicative and subject to change. Additional charges apply for parking, club membership, and maintenance.
              </div>
            </div>
          </div>
        )}

        {/* Floor Plans Tab Content */}
        {activeTab === 'floorplans' && (
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Floor Plans</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {pricingData.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-3 md:p-4 bg-gray-50 border-b flex items-center justify-between">
                    <h3 className="font-semibold">{item.type} - {item.area}</h3>
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${item.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {item.available ? 'Available' : 'Sold Out'}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-100 h-48 md:h-64 flex items-center justify-center">
                      <HiOutlineHome className="text-gray-400" size={64} />
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="mb-3 sm:mb-0">
                        <div className="text-gray-700">Starting at</div>
                        <div className="flex items-center font-semibold text-lg">
                          <HiOutlineCurrencyRupee className="text-orange-500" />
                          <span>{item.price} Lacs*</span>
                        </div>
                      </div>
                      <button
                        onClick={() => openModal(item)}
                        className={`w-full sm:w-auto py-2 px-4 rounded ${
                          item.available
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        } transition duration-300`}
                        disabled={!item.available}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Tab Content */}
        {activeTab === 'features' && (
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Features & Amenities</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {pricingData.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-3 md:p-4 bg-gray-50 border-b">
                    <h3 className="font-semibold">{item.type} Features</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openModal(item)}
                      className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded transition duration-300"
                    >
                      Request Full Specifications
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="animate-fadeIn">
            <ContactForm 
              onClose={closeModal} 
              selectedUnit={selectedUnit} 
            />
          </div>
        </div>
      )}

      {/* Download Brochure Modal - FIXED */}
      {showDownloadForm && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-200 p-4">
          <div className="animate-fadeIn">
            <DownloadForm onClose={closeDownloadForm} />
          </div>
        </div>
      )}
      {showRequestCallBack && (
        <div className='fixed inset-0 bg-black/10 flex items-center justify-center z-200 p-4'>
          <div className='animate-fadeIn'>
            <RequestCallBack onClose={closeRequestCallBack} />
          </div>
        </div>
      )}
      {showContactForm && (
        <div className='fixed inset-0 bg-black/10 flex items-center justify-center z-200 p-4'>
          <div className='animate-fadeIn'>
            <ContactForm onClose={closeContactForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;