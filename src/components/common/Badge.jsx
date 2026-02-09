import React from 'react';

export const Badge = ({ children, variant = 'indigo', className = '' }) => {
  const variants = {
    // For Job Types (Remote, Full-time)
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    // For Skills or secondary info
    slate: "bg-slate-800 text-slate-300 border-slate-700",
    // For Success states
    green: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};