import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} School Management System. All rights reserved.
    </div>
  );
};

export default Footer;
