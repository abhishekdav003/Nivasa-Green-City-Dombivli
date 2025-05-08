import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaRegCommentDots } from 'react-icons/fa';

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 w-full bg-orange-500 text-white flex justify-around items-center py-3 z-50 md:hidden">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9892544519"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-sm"
      >
        <FaWhatsapp size={20} />
        <span>Whatsapp</span>
      </a>

      {/* Phone */}
      <a href="tel:7304616023" className="flex flex-col items-center text-sm">
        <FaPhoneAlt size={20} />
        <span>9892544519</span>
      </a>

      {/* Enquiry */}
      <a href="#enquiry" className="flex flex-col items-center text-sm">
        <FaRegCommentDots size={20} />
        <span>Enquiry</span>
      </a>
    </div>
  );
};

export default MobileFooter;
