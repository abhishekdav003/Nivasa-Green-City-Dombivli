import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import CallBackForm from './RequestCallBack'; // Make sure path is correct
// import VisitForm from './VisitForm';       // If needed

const QuoteForm = () => {
  const [showCallBackForm, setShowCallBackForm] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [showVisitForm, setShowVisitForm] = useState(false); // if needed

  const handleCallBackClick = () => {
    setFormKey(prev => prev + 1); // Remount form
    setShowCallBackForm(true);
  };

  const handleCloseCallBackForm = () => {
    setShowCallBackForm(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Your request has been sent! We will get back to you soon.');
    event.target.reset();
  };

  return (
    <div className="fixed top-0 right-0 w-[22%] lg:w-[22%] md:w-[30%] sm:w-[50%] h-full bg-white shadow-lg z-50 overflow-y-auto hidden lg:block">
      {/* Organize Site Visit with WhatsApp Button */}
      <div className="bg-gray-800 text-white p-2 flex items-center justify-between">
        <span className="text-sm 2xl:text-xl">Organize Site Visit</span>
        <a href="https://wa.me/9892544519" className="flex items-center">
          <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 mr-1" />
          <span className="text-sm 2xl:text-xl">+91 8652814714</span>
        </a>
      </div>

      {/* Request Call Back Button */}
      <div className="flex justify-center mt-4 mb-4">
        <button
          className="flex items-center justify-center gap-2 px-4 py-3 text-lg text-white bg-orange-500 rounded-md w-4/5"
          onClick={handleCallBackClick}
        >
          <PhoneCall className="w-5 h-5" />
          <span className='text-sm 2xl:text-xl'>Request Call Back</span>
        </button>
      </div>

      {/* Conditionally render the CallBackForm */}
      {showCallBackForm && <CallBackForm key={formKey} handleClose={handleCloseCallBackForm} />}

      {/* Register For Latest Offers Heading */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-medium text-gray-800">Register For Latest Offers</h3>
      </div>

      {/* Main Form */}
      <form onSubmit={handleFormSubmit} className="space-y-4 px-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-2 py-2 border-b border-gray-300 text-gray-700 text-md 2xl:text-xl focus:outline-none"
            required
          />
        </div>

        <div className="flex border-b border-gray-300">
          <div className="flex items-center pr-2">
            <img src="/Flag_of_India.svg.webp" alt="India" className="w-6 h-4" />
            <span className="text-gray-600 ml-1">•</span>
          </div>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No"
            className="w-full px-2 py-2 text-gray-700 text-md 2xl:text-xl focus:outline-none"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="E-Mail Address"
            className="w-full px-2 py-2 border-b border-gray-300 text-gray-700 text-md 2xl:text-xl focus:outline-none"
            required
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-4 py-3 text-md 2xl:text-xl font-medium text-white bg-orange-500 rounded-md w-4/5"
          >
            Latest Offers
          </button>
        </div>
      </form>

      {/* Free Pickup & Drop Button */}
      <div className="flex justify-center mt-6 px-4">
        <button
          className="flex items-center justify-center gap-2 px-4 py-3 text-lg text-gray-800 border border-gray-300 rounded-md w-full"
        >
          <div className="bg-black rounded-full p-1">
            <div className="bg-yellow-500 rounded-full w-4 h-4"></div>
          </div>
          <span className='text-md 2xl:text-xl'>Free Pickup & Drop</span>
        </button>
      </div>

      {/* Conditionally render the VisitForm */}
      {showVisitForm && <VisitForm />}
    </div>
  );
};

export default QuoteForm;
