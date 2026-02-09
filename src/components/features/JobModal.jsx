import { useState } from 'react';
import { Button } from '../common/Button';

export const JobModal = ({ job, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApply = () => {
    setIsSuccess(true); // Simulate application success
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#151B28] border border-slate-700 w-full max-w-lg rounded-3xl p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white">✕</button>
        
        {!isSuccess ? (
          <>
            <h2 className="text-3xl font-bold text-white">{job.title}</h2>
            <p className="text-indigo-400 font-semibold mb-6">{job.company}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{job.description}</p>
            <div className="mb-8">
               <h4 className="text-white font-bold mb-3 text-sm">Skills Required</h4>
               <div className="flex flex-wrap gap-2">
                 {job.skills.map(s => <span key={s} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs border border-slate-700">{s}</span>)}
               </div>
            </div>
            <Button className="w-full py-4" onClick={handleApply}>Apply Now</Button>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40">✓</div>
            <h2 className="text-2xl font-bold text-white">Application Sent!</h2>
            <p className="text-slate-400 mt-2">Success! You have applied to {job.company}.</p>
            <Button variant="outline" className="mt-8" onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};