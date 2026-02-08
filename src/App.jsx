import React, { useState } from 'react';
import jobsData from './data/jobs.json';

// Simple Button Component
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const styles = variant === 'primary' 
    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md font-medium transition ${styles} ${className}`}>
      {children}
    </button>
  );
};

// Job Card Component
const JobCard = ({ job, onViewDetails }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
        <p className="text-gray-600 font-medium">{job.company}</p>
        <div className="flex gap-3 mt-2">
          <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-500">{job.location}</span>
          <span className="text-sm bg-indigo-50 px-2 py-1 rounded text-indigo-600 font-semibold">{job.type}</span>
        </div>
      </div>
      <Button onClick={() => onViewDetails(job)}>View Details</Button>
    </div>
  </div>
);

// Modal Component
const Modal = ({ job, onClose, onApply, isSuccess }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
        
        {!isSuccess ? (
          <>
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-indigo-600 font-medium mb-4">{job.company}</p>
            <div className="mb-6">
              <h4 className="font-semibold mb-1 text-gray-800">Description</h4>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>
            <div className="mb-8">
              <h4 className="font-semibold mb-2 text-gray-800">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">{skill}</span>
                ))}
              </div>
            </div>
            <Button onClick={onApply} className="w-full py-3">Apply Now</Button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Success!</h2>
            <p className="text-gray-600 mt-2">Your application for {job.title} at {job.company} has been submitted successfully.</p>
            <Button onClick={onClose} variant="secondary" className="mt-6">Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleApply = () => {
    // Simulate API call
    setIsSuccess(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b px-8 py-4">
        <h1 className="text-2xl font-bold text-indigo-600">JobPortal</h1>
      </nav>

      {/* Hero/Header */}
      <header className="max-w-4xl mx-auto pt-12 pb-8 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Available Jobs</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search by job title or company..." 
            className="w-full p-4 pl-12 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-4 text-gray-400">🔍</span>
        </div>
      </header>

      {/* Job List */}
      <main className="max-w-4xl mx-auto px-4 pb-20 space-y-4">
        {jobsData
          .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(job => (
            <JobCard key={job.id} job={job} onViewDetails={setSelectedJob} />
          ))}
      </main>

      {/* Details Modal */}
      {selectedJob && (
        <Modal 
          job={selectedJob} 
          onClose={closeModal} 
          onApply={handleApply} 
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
}