import React, { useState } from 'react';
import QueryForm from './QueryNowForm'; // Make sure this path is correct

const ProjectCardMobile = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formKey, setFormKey] = useState(0); // Key to force remount

  const handleOpenForm = () => {
    setFormKey(prev => prev + 1);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="max-w-sm mx-auto block md:hidden rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="px-4 py-2 text-center text-lg font-bold text-orange-500">
          BOOKING OPEN
        </div>
        
        <div className="p-4 text-center bg-white">
          <h2 className="text-2xl font-bold text-black">BALAJI ESTATE C3</h2>
          <p className="mt-1 text-md text-black">At Dombivli East</p>
          <p className="text-sm text-black">By Sai Balaji Buildcon</p>
          
          <div className="flex flex-col gap-2 mt-4">
            <div className="py-2 text-center text-white bg-orange-500 rounded text-xs">
              KDMC & MAHARERA APPROVED
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded text-xs">
              35+ ACRES LAND
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded text-xs">
              GROUND + 23 AND 28 HABITABLE FLOORS
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded text-xs">
              SAMPLE FLAT READY | ALL FLATS ARE VASTU COMPLIANT
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded text-xs">
              AVAIL BEST OFFERS & DISCOUNTS*
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-black">1 & 2 BHK Apartments</p>
            <div className="mt-1">
              <p className="text-xl font-bold text-black">Starts From ₹ 29.99 Lacs*</p>
            </div>
            
            <button onClick={handleOpenForm} className="px-4 py-2 mt-3 text-md font-medium text-white bg-orange-500 rounded-md">
              Enquire Now
            </button>
            
            <p className="mt-3 text-xs text-black">
              Rera Regd. No. : P51700055656
            </p>
          </div>
        </div>
      </div>

      {isFormOpen && <QueryForm key={formKey} handleClose={handleCloseForm} />}
    </>
  );
};

export default ProjectCardMobile;
