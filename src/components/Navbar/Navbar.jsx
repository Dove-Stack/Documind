import { Icon } from "@iconify/react";
import React from "react";




const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-navy p-1.5 rounded-lg text-white">
            <Icon icon="mage:light-bulb" className="w-6 h-6" />
          </div>
          <span className="bg-linear-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent text-xl font-bold tracking-tight">
            DocuMind
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dull-text">
          <a href="#" className="hover:text-brand-navy transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-brand-navy transition-colors">
            How It Works
          </a>
          <a href="#" className="hover:text-brand-navy transition-colors">
            Demo
          </a>
          <a href="#" className="hover:text-brand-navy transition-colors">
            Testimonials
          </a>

          <button className="text-brand-navy border border-brand-navy px-8 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform">
            Login
          </button>

          <button className="bg-brand-navy text-white px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
