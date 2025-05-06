import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DownloadForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfvlkDfG7MCVGPIU7chKZmS_OaIjNjpWmU2SYyPVgxglLBtNg/formResponse";

      const formBody = new URLSearchParams();
      formBody.append("entry.1781869431", formData.name);
      formBody.append("entry.377831199", formData.email);
      formBody.append("entry.183978529", "+91");
      formBody.append("entry.1348877516", formData.phone);

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setSubmitted(true);

      setTimeout(() => {
        // Trigger download of the brochure PDF
        const link = document.createElement("a");
        link.href = "/brochure.pdf";
        link.download = "brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close form after download
        if (handleClose) handleClose();
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-80 p-4">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow8xl overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 sm:py-3 px-3 sm:px-4 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-bold text-center flex-1">Download Brochure</h2>
          <button 
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Section - We Promise (hidden on mobile) */}
          {!isMobile && (
            <div className="bg-gradient-to-b from-orange-50 to-white p-4 md:w-2/5 border-r border-orange-100 hidden md:block">
              <h3 className="text-lg font-bold text-orange-600 mb-4 text-center">We Promise</h3>
              
              <div className="space-y-6">
                {/* Instant Call Back */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 mb-2 shadow-md group-hover:shadow-lg group-hover:bg-orange-200 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">Instant Call Back</span>
                </div>

                {/* Free Site Visit */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 mb-2 shadow-md group-hover:shadow-lg group-hover:bg-orange-200 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">Free Site Visit</span>
                </div>

                {/* Unmatched Price */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 mb-2 shadow-md group-hover:shadow-lg group-hover:bg-orange-200 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">Unmatched Price</span>
                </div>
              </div>
            </div>
          )}

          {/* Right Section - Form */}
          <div className="p-3 sm:p-4 w-full md:w-3/5 bg-white">
            {submitted ? (
              <div className="h-full flex items-center justify-center py-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Thank You!</h3>
                  <p className="mt-2 text-sm text-gray-600">Your brochure is downloading now...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                <div className="text-center mb-2 sm:mb-3">
                  <h3 className="text-xs sm:text-sm font-medium text-gray-600">Enter Your Details to</h3>
                  <h2 className="text-base sm:text-lg font-bold text-orange-600">Download Your Brochure</h2>
                </div>
                
                <div className="space-y-3">
                  {/* Name Field */}
                  <div className="group">
                    <label className="text-xs font-medium text-gray-500 mb-1 block transition-all duration-200 group-focus-within:text-orange-600">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-gray-400 group-focus-within:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full pl-8 pr-3 py-2 border-b-2 border-gray-200 text-gray-800 text-sm rounded-t-md focus:border-orange-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile Field with Flag */}
                  <div className="group">
                    <label className="text-xs font-medium text-gray-500 mb-1 block transition-all duration-200 group-focus-within:text-orange-600">Mobile Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <span className="flex items-center justify-center w-5 h-3 bg-orange-50 rounded overflow-hidden">
                          <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-full h-full object-cover" />
                        </span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        className="w-full pl-8 pr-3 py-2 border-b-2 border-gray-200 text-gray-800 text-sm rounded-t-md focus:border-orange-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="text-xs font-medium text-gray-500 mb-1 block transition-all duration-200 group-focus-within:text-orange-600">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-gray-400 group-focus-within:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full pl-8 pr-3 py-2 border-b-2 border-gray-200 text-gray-800 text-sm rounded-t-md focus:border-orange-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                  >
                    Download now
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    By clicking "Download now", you agree to our Terms of Service
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <div>
      
      
      {isOpen && <DownloadForm handleClose={closeForm} />}
    </div>
  );
}