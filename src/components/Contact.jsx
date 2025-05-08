import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { HiArrowRight} from 'react-icons/hi';


// Main ContactUs component
export default function ContactUs() {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // State for section toggles
  const [openSections, setOpenSections] = useState({
    education: false,
    temples: false,
    malls: false,
    parks: false,
    hospitals:false
  });

  // State for animation
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation effect
  useEffect(() => {
    setIsVisible(true);
    
    // Add animation classes to elements
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-complete');
      }, 100 * index);
    });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Google Form submission URL (to be replaced with actual values)
    const formActionURL = "https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse";
    
    // Map form fields to Google Form entry IDs
    const formEntryIDs = {
      firstName: "entry.123456789",
      email: "entry.234567890",
      phone: "entry.345678901",
      subject: "entry.456789012",
      message: "entry.567890123"
    };
    
    // In a real implementation, you would handle the form submission to Google Forms
    // using a hidden iframe or a server-side proxy to avoid CORS issues
    
    // Simulating successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  // Toggle section visibility
  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="font-sans w-full md:w-[78%] select-none">
      {/* Page Title Section */}
            <div className="bg-gray-800 mb-8 text-white">
              <div className="container mx-auto px-4 py-8 md:py-12">
                <h1 className="text-2xl md:text-4xl font-bold">Pricing & Floor Plans</h1>
                <div className="flex items-center text-sm mt-2">
                  <a href="/" className="text-gray-300 hover:text-white">Home</a>
                  <HiArrowRight className="mx-2" />
                  <span className="text-orange-400">About</span>
                </div>
              </div>
            </div>
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
        {/* Left: Map and location details */}
        <div 
          className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
        >
          {/* Map image with overlay */}
          <div className="relative mb-6">
            <div className="w-full h-80 bg-gray-200 overflow-hidden rounded-lg shadow-md">
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
            
            {/* Location tag */}
            <div className="absolute bottom-6 right-6 bg-orange-900 text-white p-6 rounded shadow-lg w-60 transform rotate-2 hover:rotate-0 transition-all duration-300 cursor-pointer hover:shadow-xl">
              <p className="text-sm mb-1">A UNIQUE LOCATION</p>
              <p className="text-xl font-medium mb-1">THAT BRINGS</p>
              <p className="text-lg mb-1">THE WORLD CLOSER</p>
              <p className="text-sm">TO YOU</p>
            </div>
          </div>
          
          {/* Connectivity information */}
          <div className="bg-blue-50 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="bg-blue-100 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('education')}
            >
              <h3 className="text-lg font-bold text-blue-900">EDUCATIONAL INSTITUTES</h3>
              {openSections.education ? 
                <ChevronUp className="text-blue-900" size={20} /> : 
                <ChevronDown className="text-blue-900" size={20} />
              }
            </div>
            
            {openSections.education && (
              <div className="p-6 animate-fadeIn">
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">ORCHIDS The International School  :</span> 3 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Pragati College Of Arts & Commerce :</span> 4 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Swami Vivekanand Law College (RSS)  :</span> 6 mins
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Hospitals section */}
          <div className="bg-blue-50 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="bg-blue-100 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('temples')}
            >
              <h3 className="text-lg font-bold text-blue-900">TEMPLES</h3>
              {openSections.temples ? 
                <ChevronUp className="text-blue-900" size={20} /> : 
                <ChevronDown className="text-blue-900" size={20} />
              }
            </div>
            
            {openSections.temples && (
              <div className="p-6 animate-fadeIn">
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Shree Gaondevi Mandir :</span> 4 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Suvidhinath Jain Derasar :</span> 6 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Swami Samarth Math  :</span> 6 mins
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Schools section */}
          <div className="bg-blue-50 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="bg-blue-100 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('malls')}
            >
              <h3 className="text-lg font-bold text-blue-900">SHOPPING & MALLS</h3>
              {openSections.malls ? 
                <ChevronUp className="text-blue-900" size={20} /> : 
                <ChevronDown className="text-blue-900" size={20} />
              }
            </div>
            
            {openSections.malls && (
              <div className="p-6 animate-fadeIn">
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">D-Mart : </span> 10 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Gopi Mall :</span> 12 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">GNP Galleria :</span> 15 mins
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Schools section */}
          <div className="bg-blue-50 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="bg-blue-100 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('parks')}
            >
              <h3 className="text-lg font-bold text-blue-900">PARKS & SPORTS</h3>
              {openSections.parks ? 
                <ChevronUp className="text-blue-900" size={20} /> : 
                <ChevronDown className="text-blue-900" size={20} />
              }
            </div>
            
            {openSections.parks && (
              <div className="p-6 animate-fadeIn">
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1"> Bahinabai Garden :</span> 1 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">KDMC Ground (Vijay Pusalkar Udyan)  :</span> 7 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Gaondevi Garden  :</span> 7 mins
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Retail section */}
          <div className="bg-blue-50 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="bg-blue-100 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('hospitals')}
            >
              <h3 className="text-lg font-bold text-blue-900">HOSPITALS</h3>
              {openSections.hospitals ? 
                <ChevronUp className="text-blue-900" size={20} /> : 
                <ChevronDown className="text-blue-900" size={20} />
              }
            </div>
            
            {openSections.hospitals && (
              <div className="p-6 animate-fadeIn">
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Sai Jyot Hospital  :</span> 6 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">Matoshree Hospital :</span> 6 mins
                  </li>
                  <li className="flex items-start group">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mt-2 mr-2 group-hover:bg-orange-600 transition-colors duration-300"></span>
                    <span className="font-medium mr-1">ICON Hospital  :</span> 7 mins
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Right: Contact form and details */}
        <div 
          className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} delay-300`}
        >
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="space-y-6">
              {/* Hidden iframe for Google Forms submission */}
              <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}} />
              
              {/* The actual form that targets the hidden iframe */}
              <div 
                id="contact-form"
                className="space-y-6"
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700"> Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-600 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-600 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-600 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-600 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Write Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-orange-600 focus:outline-none transition-colors duration-300"
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    disabled={isSubmitting}
                    className={`relative overflow-hidden bg-orange-600 text-white py-3 px-8 rounded-md shadow-md hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 ${isSubmitting ? 'opacity-70' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : submitSuccess ? "Message Sent!" : "Submit"}
                    
                    {!isSubmitting && !submitSuccess && (
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowUpRight size={16} />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact details */}
          <div className="space-y-6">
            <div className="flex items-start group cursor-pointer hover:translate-x-1 transition-transform duration-300">
              <div className="bg-orange-600 p-2 rounded-full mr-4 group-hover:bg-orange-700 transition-colors duration-300">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Address :</h4>
                <p className="text-gray-700">
                  Balaji Classica, On Diva Manpada Road,<br />
                  Nr. Runwal My City, Usarghar, Dombivli East, 421201
                </p>
              </div>
            </div>
            
            <div className="flex items-start group cursor-pointer hover:translate-x-1 transition-transform duration-300">
              <div className="bg-orange-600 p-2 rounded-full mr-4 group-hover:bg-orange-700 transition-colors duration-300">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email :</h4>
                <a href="mailto:sales@Balajiclassica.com" className="text-gray-700 hover:text-orange-600 transition-colors">
                  sales@Balajiclassica.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start group cursor-pointer hover:translate-x-1 transition-transform duration-300">
              <div className="bg-orange-600 p-2 rounded-full mr-4 group-hover:bg-orange-700 transition-colors duration-300">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone :</h4>
                <a href="tel:7304616023" className="text-gray-700 hover:text-orange-600 transition-colors">
                  7304616023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Script for Google Form submission */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // This script would handle the Google Forms submission
          // In a real implementation, you would use this to handle the form redirect
          // And populate the form fields before submission
        `
      }} />
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-on-load {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .animate-complete {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}