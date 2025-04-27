"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [workLocation, setWorkLocation] = useState('all');
  const [contractType, setContractType] = useState('all');
  const [salaryRange, setSalaryRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data.jobs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    // Search term matching
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.typeofcarees.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.jobrequirementskills.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Work location filter
    const matchesLocation = workLocation === 'all' || job.typeofsystem.toLowerCase() === workLocation.toLowerCase();
    
    // Contract type filter
    const matchesContract = contractType === 'all' || job.contractTerm.toLowerCase().includes(contractType.toLowerCase());
    
    // Salary range filter
    let matchesSalary = true;
    if (salaryRange !== 'all') {
      const salaryNumbers = job.salary.match(/\d+/g);
      if (salaryNumbers && salaryNumbers.length >= 2) {
        const minSalary = parseInt(salaryNumbers[0]);
        const maxSalary = parseInt(salaryNumbers[1]);
        
        switch(salaryRange) {
          case 'low':
            matchesSalary = maxSalary < 1000;
            break;
          case 'medium':
            matchesSalary = minSalary >= 1000 && maxSalary <= 5000;
            break;
          case 'high':
            matchesSalary = minSalary > 5000;
            break;
          default:
            matchesSalary = true;
        }
      }
    }
    
    return matchesSearch && matchesLocation && matchesContract && matchesSalary;
  });

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sortBy === 'salary-high') {
      const aSalary = parseInt(a.salary.match(/\d+/g)?.[1] || 0);
      const bSalary = parseInt(b.salary.match(/\d+/g)?.[1] || 0);
      return bSalary - aSalary;
    } else if (sortBy === 'salary-low') {
      const aSalary = parseInt(a.salary.match(/\d+/g)?.[0] || 0);
      const bSalary = parseInt(b.salary.match(/\d+/g)?.[0] || 0);
      return aSalary - bSalary;
    }
    return 0;
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setSelectedJob(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-xl mx-auto w-full py-20 text-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search jobs by title, skills, or keywords..."
              className="pl-10 pr-4 py-3 w-full rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <select 
              className="px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={workLocation}
              onChange={(e) => setWorkLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select>

            <select 
              className="px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contractType}
              onChange={(e) => setContractType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="contract">Contract</option>
            </select>

            <select 
              className="px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
            >
              <option value="all">All Salaries</option>
              <option value="low">Under $1,000</option>
              <option value="medium">$1,000 - $5,000</option>
              <option value="high">Over $5,000</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-300">Sort by:</span>
            <select 
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="salary-high">Salary (High to Low)</option>
              <option value="salary-low">Salary (Low to High)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedJobs.map((job) => (
          <div 
            key={job._id}
            onClick={() => handleJobClick(job)}
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:shadow-blue-500/20"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image 
                    src={job.cardImgIcon} 
                    alt={job.title}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      job.typeofsystem === 'remote' ? 'bg-green-900 text-green-300' :
                      job.typeofsystem === 'hybrid' ? 'bg-blue-900 text-blue-300' :
                      'bg-purple-900 text-purple-300'
                    }`}>
                      {job.typeofsystem.charAt(0).toUpperCase() + job.typeofsystem.slice(1)}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      job.status === 'active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                    }`}>
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
                  <span className="text-blue-400 font-medium">{job.salary}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Jobs Found */}
      {sortedJobs.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 text-gray-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-300">No jobs found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Job Details Modal */}
      
    </div>
  );
}