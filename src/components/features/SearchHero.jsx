import { Button } from '../common/Button';
import { Input } from '../common/Input';

export const SearchHero = ({ onSearchChange }) => (
  <header className="max-w-4xl mx-auto pt-20 pb-12 px-6 text-center">
    <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white">Find Your Dream Job</h1>
    <p className="text-slate-400 text-lg mb-10">Discover opportunities that match your skills and interests</p>
    
    <div className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
      <Input 
        placeholder="Search for job titles or companies..." 
        onChange={(e) => onSearchChange(e.target.value)}
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
      />
      <Button className="md:w-32 py-3.5">Search</Button>
    </div>
  </header>
);