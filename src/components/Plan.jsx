import React, { useState, useEffect } from 'react';

const SiteFloorPlanComponent = () => {
  const [activeTab, setActiveTab] = useState('masterplan');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const plans = {
    masterplan: {
      title: "Master Plan",
      image: "/master.png", // Display image
      pdfFile: "/master.pdf",   // PDF for download
      flatType: "Master Plan"
    },
    onebhk: {
      title: "1 BHK",
      image: "/1bhk.png",      // Display image
      pdfFile: "/1bhk.pdf",    // PDF for download
      flatType: "1 BHK"
    },
    twobhk: {
      title: "2 BHK",
      image: "/2bhk.png",      // Display image
      pdfFile: "/2bhk.pdf",    // PDF for download
      flatType: "2 BHK"
    }
  };

  const handleDownload = (planType) => {
    setSelectedPlan(planType);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare form data to send to Google Forms
    const formEntryData = {
      ...formData,
      flatType: plans[selectedPlan].flatType
    };
    
    // Here you would add your actual Google Form submission
    // Example implementation:
    // const formUrl = 'YOUR_GOOGLE_FORM_URL';
    // const formData = new FormData();
    // formData.append('entry.123456789', formEntryData.name);        // Replace with your actual entry IDs
    // formData.append('entry.987654321', formEntryData.email);       // Replace with your actual entry IDs
    // formData.append('entry.456123789', formEntryData.phone);       // Replace with your actual entry IDs
    // formData.append('entry.789456123', formEntryData.flatType);    // Replace with your actual entry IDs
    //
    // fetch(formUrl, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   body: formData
    // })
    
    // For now, just log and simulate submission
    console.log("Form submitted with data:", formEntryData);
    
    // Simulate network delay then download the PDF
    setTimeout(() => {
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = plans[selectedPlan].pdfFile;
      link.download = `${plans[selectedPlan].title.replace(' ', '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset and close modal
      setIsSubmitting(false);
      setShowModal(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 1000);
  };

  return (
    <section id="site" className="w-full md:w-[78%] bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-xl p-6 md:p-10 my-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-orange-100 rounded-full opacity-60"></div>
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
      
      {/* Header with animated underline */}
      <div className="relative z-10 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block">
          Site & Floor Plans
        </h1>
        <div className="h-1 w-20 bg-orange-500 mt-2 rounded animate-pulse"></div>
        <p className="text-gray-600 mt-2">Explore our thoughtfully designed layouts</p>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex flex-wrap md:flex-nowrap mb-6 border-b border-gray-200">
        {Object.keys(plans).map((planKey) => (
          <button
            key={planKey}
            className={`px-4 py-3 font-medium transition-all duration-300 ${
              activeTab === planKey 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-orange-400'
            }`}
            onClick={() => setActiveTab(planKey)}
          >
            {plans[planKey].title}
          </button>
        ))}
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image display area */}
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
          <div className="relative pb-[70%] md:pb-[60%] overflow-hidden">
            <img
              src={plans[activeTab].image}
              alt={plans[activeTab].title}
              className="absolute inset-0 w-full h-full object-contain p-4"
            />
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 flex justify-between items-center">
            <span className="text-xl font-semibold">{plans[activeTab].title}</span>
            <button 
              onClick={() => handleDownload(activeTab)}
              className="bg-white text-orange-500 px-4 py-2 rounded-md font-medium hover:bg-orange-50 transition-colors duration-300 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download
            </button>
          </div>
        </div>
        
        {/* Thumbnails sidebar */}
        <div className="w-full md:w-1/4 flex md:flex-col gap-4">
          {Object.keys(plans).map((planKey) => (
            <div 
              key={planKey}
              className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transform transition-all duration-300 ${
                activeTab === planKey ? 'ring-2 ring-orange-500 scale-105' : 'opacity-75 hover:opacity-100'
              }`}
              onClick={() => setActiveTab(planKey)}
            >
              <div className="pb-[70%] relative">
                <img
                  src={plans[planKey].image}
                  alt={plans[planKey].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-2 font-medium">{plans[planKey].title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Download Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all animate-fadeIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Download {plans[selectedPlan].title}</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">Please fill out the form below to download the floor plan.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                  } transition-colors duration-300 flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      Download Now
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      
    </section>
  );
};

export default SiteFloorPlanComponent;