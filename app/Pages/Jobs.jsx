"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [workLocation, setWorkLocation] = useState('all');
  const [jobType, setJobType] = useState('all');
  const [salaryRange, setSalaryRange] = useState('all');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleJobs, setVisibleJobs] = useState(6);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://kuvoshadmin.vercel.app/api/jobs');
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
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.typeofcarees?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.jobrequirementskills?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.country?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = workLocation === 'all' || 
                          job.typeofsystem?.toLowerCase() === workLocation.toLowerCase();
    
    const matchesJobType = jobType === 'all' || 
                         job.contractTerm?.toLowerCase() === jobType.toLowerCase();
    
    let matchesSalary = true;
    if (salaryRange !== 'all') {
      const salaryNumbers = job.salary?.match(/\d+/g);
      if (salaryNumbers && salaryNumbers.length >= 2) {
        const minSalary = parseInt(salaryNumbers[0]);
        const maxSalary = parseInt(salaryNumbers[1]);
        
        switch(salaryRange) {
          case 'low':
            matchesSalary = maxSalary <= 1000;
            break;
          case 'medium':
            matchesSalary = minSalary >= 1000 && maxSalary <= 5000;
            break;
          case 'high':
            matchesSalary = minSalary >= 5000;
            break;
          default:
            matchesSalary = true;
        }
      }
    }
    
    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  const loadMoreJobs = () => {
    setVisibleJobs(prev => prev + 6);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
    <div className="max-w-screen-2xl min-h-screen  mx-auto px-4 py-20">
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
              placeholder="Search jobs by title, skills, country, or keywords..."
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
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
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
              <option value="low">Up to $1,000</option>
              <option value="medium">$1,000 - $5,000</option>
              <option value="high">$5,000+</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-300">{filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setWorkLocation('all');
              setJobType('all');
              setSalaryRange('all');
            }}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Clear filters
          </button>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.slice(0, visibleJobs).map((job) => (
          <div key={job._id} className="bg-gray-800/80 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="relative h-[300px] w-full">
              <Image
                src={job.cardImgIcon || '/default-job-icon.png'}
                alt={job.title}
                fill
                className="object-fill"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center mt-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        job.typeofsystem === 'remote' ? 'bg-green-100 text-green-800' :
                        job.typeofsystem === 'hybrid' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {job.typeofsystem?.charAt(0).toUpperCase() + job.typeofsystem?.slice(1)}
                      </span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    job.status === 'active' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
                  }`}>
                    {job.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-white font-semibold text-xl">{job.title}</h3>
              
              {/* Added country display here */}
              {job.country && (
                <div className="flex items-center mt-1 mb-2 text-gray-300">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{job.country}</span>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-300">{job.salary || 'Salary not specified'}</span>
                </div>
                <span className="text-xs text-gray-400">{formatDate(job.createdAt)}</span>
              </div>
              
              <div className="mt-4 flex justify-end items-end">
                <Link href={`/jobs/${job._id}`} className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
                  Submit cv
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 mb-4 text-gray-500">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-300">No jobs found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}