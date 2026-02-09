import { useState, useMemo } from 'react';
import jobsData from '../../data/jobs.json';
import { Navbar } from './Navbar';
import { SearchHero } from '../features/SearchHero';
import { JobCard } from '../features/JobCard';
import { JobModal } from '../features/JobModal';

export const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = useMemo(() => {
    return jobsData.filter(j => 
      j.title.toLowerCase().includes(search.toLowerCase()) || 
      j.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />
      <SearchHero onSearchChange={setSearch} />
      
      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-4">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} onOpenDetails={setSelectedJob} />
        ))}
      </main>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};
