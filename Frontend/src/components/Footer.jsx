import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4B3621] text-white py-10 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Ghost Text */}
        <h1 className="text-7xl font-extrabold tracking-widest uppercase opacity-10 select-none text-yellow-100">
          moinqadir
        </h1>

        {/* Bottom Text & Links */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-yellow-100">
          <p>All rights reserved 2025 © Moinqadir</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline transition hover:text-yellow-300">Privacy Policy</a>
            <a href="#" className="hover:underline transition hover:text-yellow-300">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="absolute bottom-6 right-6">
        <a
          href="#top"
          className="bg-[#5C4033] hover:bg-[#704214] text-white rounded-full p-2 transition shadow-lg"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

