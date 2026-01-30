import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">{"Document Icon"}</div>
          <span className="text-xl">DocuMind</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:"></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
