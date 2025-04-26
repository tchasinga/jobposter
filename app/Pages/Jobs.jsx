"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [workLocation, setWorkLocation] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/jobs');
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
                         job.typeofcarees.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = workLocation === 'all' || job.typeofsystem.toLowerCase() === workLocation.toLowerCase();
    return matchesSearch && matchesLocation;
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
      <div className="mb-8 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
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
              className="pl-10 pr-4 py-3 w-full rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <select 
              className="px-4 py-3 rounded-lg bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={workLocation}
              onChange={(e) => setWorkLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-300">{filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found</p>
        </div>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            key={job._id}
            onClick={() => handleJobClick(job)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={job.cardImgIcon} 
                alt={job.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <p className="text-gray-300 text-sm">{job.country} • {job.typeofworks}</p>
              </div>
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {job.typeofsystem}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-blue-400 font-medium">{job.typeofcarees}</span>
                <span className="text-yellow-400 font-bold">{job.salary}</span>
              </div>
              
              <p className="text-gray-300 line-clamp-2 mb-4">{job.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{new Date(job.createdAt).toLocaleDateString()}</span>
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 mb-4 text-gray-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-300 mb-2">No jobs found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Job Details Modal */}
      {isModalOpen && selectedJob && (
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center p-4 z-[9999]"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-900 rounded-xl shadow-2xl max-w-7xl w-full max-h-[90vh] border border-gray-700 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full">
              <Image 
                src={selectedJob.bgdetailspage} 
                alt="Job background" 
                fill
                className="object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl font-bold text-white">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {selectedJob.country}
                  </span>
                  <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {selectedJob.typeofworks}
                  </span>
                  <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">
                    {selectedJob.typeofsystem}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Salary</h3>
                  <p className="text-white">{selectedJob.salary}</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Contract Term</h3>
                  <p className="text-white">{selectedJob.contractTerm}</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Job Type</h3>
                  <p className="text-white">{selectedJob.typeofcarees}</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Casino experience</h3>
                  <p className="text-white">{selectedJob.questionone}</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">IGaming experience</h3>
                  <p className="text-white">{selectedJob.questiontwo}</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Posted</h3>
                  <p className="text-white">
                    {new Date(selectedJob.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 border-b border-gray-700 pb-2">Project Description</h3>
                  <p className="text-gray-300 whitespace-pre-line">{selectedJob.projectdescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 border-b border-gray-700 pb-2">Requirements</h3>
                  <p className="text-gray-300 whitespace-pre-line">{selectedJob.jobrequirementskills}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 border-b border-gray-700 pb-2">Responsibilities</h3>
                  <p className="text-gray-300 whitespace-pre-line">{selectedJob.jobresponsibilities}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 py-3 px-6 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors"
                >
                  Close
                </button>
                <Link
                  href={{
                    pathname: '/apply',
                    query: { jobTitle: selectedJob.title }
                  }}
                  className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium text-center transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
