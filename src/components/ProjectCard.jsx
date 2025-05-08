import React, { useState } from 'react';
import QueryForm from './QueryNowForm'; // Make sure this path is correct

const ProjectCard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formKey, setFormKey] = useState(0); // Key to force form remount

  const handleOpenForm = () => {
    setFormKey(prev => prev + 1); // Change key to reset form
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="max-w-sm mx-auto mt-16 overflow-hidden border border-gray-200 shadow-md rounded-xl">
        <div className="px-4 py-2 text-center text-xl font-bold bg-white text-orange-500">
          BOOKING OPEN
        </div>

        <div className="px-4 py-2 text-center bg-white">
          <h2 className="text-3xl font-bold text-black">Nivasa Green City</h2>
          <p className="mt-1 text-lg text-black">At Dombivli East</p>
          <p className="text-md text-black">By Nivasa Group</p>

          <div className="flex flex-col gap-2 mt-4">
            <div className="py-2 text-center text-white bg-orange-500 rounded-md">
              KDMC & MAHARERA APPROVED
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded-md">
              14+ ACRES LAND
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded-md">
              GROUND +30 Storey Towers
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded-md">
              SAMPLE FLAT READY | ALL FLATS ARE VASTU COMPLIANT
            </div>
            <div className="py-2 text-center text-white bg-orange-500 rounded-md">
              AVAIL BEST OFFERS & DISCOUNTS*
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xl font-medium text-black">1 & 2 BHK Apartments</p>
            <div className="flex items-center justify-center mt-2">
              <p className="text-3xl font-bold text-black">Starts From ₹ 54.99 Lacs*</p>
            </div>

            <button
              onClick={handleOpenForm}
              className="px-6 py-3 mt-4 text-lg font-medium text-white bg-orange-500 rounded-md"
            >
              Enquire Now
            </button>

            <p className="mt-4 text-sm text-black">
              Rera Regd. No. : P51700080070
            </p>
          </div>
        </div>
      </div>

      {/* Query Form (shown conditionally) */}
      {isFormOpen && <QueryForm key={formKey} handleClose={handleCloseForm} />}
    </>
  );
};

export default ProjectCard;
