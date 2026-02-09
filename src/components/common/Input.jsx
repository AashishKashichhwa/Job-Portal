export const Input = ({ icon, className = "", ...props }) => (
  <div className="relative flex-1">
    {icon && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">{icon}</span>}
    <input 
      {...props}
      className={`w-full bg-slate-900/50 border border-slate-700 py-3.5 ${icon ? 'pl-12' : 'pl-4'} pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-200 transition-all ${className}`}
    />
  </div>
);