import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
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
        if (onClose) onClose();
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-150 p-4">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow8xl overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-3 flex justify-between items-center">
          <h2 className="text-lg font-bold text-center flex-1">Contact us</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {!isMobile && (
            <div className="bg-gradient-to-b from-orange-50 to-white p-4 md:w-2/5 border-r border-orange-100 hidden md:block">
              <h3 className="text-lg font-bold text-orange-600 mb-4 text-center">We Promise</h3>
              <div className="space-y-6">
                {[
                  ["Instant Call Back", "M16 4h-3a2 2 0 00-2 1.72..."],
                  ["Free Site Visit", "M3 9l9-7 9 7v11a2 2 0..."],
                  ["Unmatched Price", "M17 5H9.5a3.5 3.5 0 0 0 0 7..."]
                ].map(([text], idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-orange-100 mb-2 flex items-center justify-center shadow-md">
                      <div className="h-6 w-6 text-orange-500">🏷</div>
                    </div>
                    <span className="text-sm font-semibold text-orange-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 w-full md:w-3/5 bg-white">
            {submitted ? (
              <div className="h-full flex items-center justify-center py-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Thank You!</h3>
                  <p className="mt-2 text-sm text-gray-600">Your query has been submitted successfully.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-600">Enter Your Details to</h3>
                  <h2 className="text-lg font-bold text-orange-600">Contact us</h2>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="Enter your name"
                    className="w-full pl-2 py-2 border-b-2 border-gray-200 text-sm focus:border-orange-500 focus:outline-none" />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1">Mobile Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    placeholder="Enter your mobile number"
                    className="w-full pl-2 py-2 border-b-2 border-gray-200 text-sm focus:border-orange-500 focus:outline-none" />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 block mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="Enter your email"
                    className="w-full pl-2 py-2 border-b-2 border-gray-200 text-sm focus:border-orange-500 focus:outline-none" />
                </div>

                <button type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-2 rounded-md hover:from-orange-600 hover:to-orange-700 transition-transform duration-300 hover:scale-[1.02]">
                  Contact Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
