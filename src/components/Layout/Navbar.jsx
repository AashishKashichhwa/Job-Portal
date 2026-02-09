import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex items-center px-8 py-4 border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-2 cursor-pointer group">
        {/* Logo Icon */}
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
          J
        </div>
        {/* Brand Name */}
        <span className="text-xl font-bold tracking-tight text-white">
          JobPortal
        </span>
      </div>

      {/* Optional: Add navigation links here if needed later */}
      <div className="ml-auto hidden md:flex items-center gap-6">
        <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Find Jobs</a>
        <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Companies</a>
        <button className="text-sm bg-slate-800 px-4 py-2 rounded-lg text-slate-200 hover:bg-slate-700 transition-all">
          Sign In
        </button>
      </div>
    </nav>
  );
};