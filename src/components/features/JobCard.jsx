import { Button } from '../common/Button';

export const JobCard = ({ job, onOpenDetails }) => (
  <div className="group bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-slate-600 transition-all">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{job.title}</h3>
        <p className="text-slate-400 font-medium mt-1">{job.company}</p>
        <div className="flex items-center gap-3 mt-4">
          <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20">{job.type}</span>
          <span className="text-slate-500 text-sm">📍 {job.location}</span>
        </div>
      </div>
      <Button variant="primary" onClick={() => onOpenDetails(job)}>View Details</Button>
    </div>
  </div>
);