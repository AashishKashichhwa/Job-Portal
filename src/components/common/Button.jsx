export const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20",
    outline: "border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white",
    success: "bg-green-600 hover:bg-green-500 text-white",
    ghost: "text-slate-500 hover:text-white"
  };

  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};