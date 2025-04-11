"use client"
import React, { useState } from 'react';
import getjobs from '../../constant/joblisting';
import Image from 'next/image';

export default function Jobs() {
  const [filter, setFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = filter === 'all' 
    ? getjobs 
    : getjobs.filter(job => job.typeofcarees === filter);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className='max-w-screen-2xl mx-auto w-full py-20'>

    <div className="pb-10">
            <div className='leading-0'>
            <h1 className='text-4xl font-bold text-white font-mono'>Available job vacancies</h1>
            <p className='text-lg font-mono py-4'>Apply by submitting your resume and more details about your careers</p>

            </div>
            <p className="text-white">Number of Jobs: {filteredJobs.length}</p>
    </div>

      {/* Filter buttons */}
      <div className='bg-slate-300 flex gap-4 flex-wrap justify-center items-center py-4 rounded-full'>
        <button 
          onClick={() => handleFilterClick('all')}
          className={`px-10 py-2 rounded-full ${
            filter === 'all' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'
          }`}
        >
          <p>Show all</p>     
        </button>

        <button 
          onClick={() => handleFilterClick('Data Visualization')}
          className={`px-10 py-2 rounded-full ${
            filter === 'Data Visualization' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'
          }`}
        >
          <p>Data Visualization</p>
        </button>

        <button 
          onClick={() => handleFilterClick('Affiliate Marketer')}
          className={`px-10 py-2 rounded-full ${
            filter === 'Affiliate Marketer' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'
          }`}
        >
          <p>Affiliate Marketer</p>
        </button>

        <button 
          onClick={() => handleFilterClick('Data/AI')}
          className={`px-10 py-2 rounded-full ${
            filter === 'Data/AI' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'
          }`}
        >
          <p>Data/AI</p>
        </button>

        <button 
          onClick={() => handleFilterClick('Development')}
          className={`px-10 py-2 rounded-full ${
            filter === 'Development' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'
          }`}
        >
          <p>Development</p>
        </button>

        <button 
          onClick={() => handleFilterClick('Programming')}
          className={`px-10 py-2 rounded-full ${
            filter === 'Programming' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'
          }`}
        >
          <p>Programming</p>
        </button>
      </div>

      {/* Job listing */}
      <div className='newproductgrid py-5'>
        {filteredJobs.map((job) => (
          <div 
            className='bg-gray-900 p-4 rounded-xl relative flex flex-col items-center cursor-pointer hover:scale-105 transition-transform' 
            key={job.id}
            onClick={() => handleJobClick(job)}
          >
            <div className='newproductcardtop'>
              <Image src={job.cardImgIcon} alt="" width={200} height={200} />
            </div>
            <div className='bg-[#309EC4] w-[70%] p-1 font-medium rounded-r-xl absolute left-0 top-[60%]'>
              <h1>{job.salary}</h1>
            </div>
            <div className='flex items-center justify-center font-bold text-white mt-4'>
              <h1>{job.title}</h1>
            </div>
            <div className='text-white mt-2'>
              <p>{job.country} • {job.typeofworks}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Job Details Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999] p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header with Background Image */}
            <div className="relative h-48 w-full">
              <Image 
                src={selectedJob.bgdetailspage} 
                alt="Job background" 
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl font-bold text-white">{selectedJob.title}</h2>
                <p className="text-white">{selectedJob.country} • {selectedJob.typeofworks} • {selectedJob.typeofsystem}</p>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-blue-600">Salary</h3>
                  <p className='text-gray-700'>{selectedJob.salary}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600">Contract Term</h3>
                  <p className='text-gray-700'>{selectedJob.contractTerm}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-500 text-blue-600">Job Type</h3>
                  <p className='text-gray-700'>{selectedJob.typeofcarees}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-500 text-blue-600">Work System</h3>
                  <p className='text-gray-700'>{selectedJob.typeofsystem}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Project Description</h3>
                <p className="text-gray-700">{selectedJob.projectdescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Job Requirements</h3>
                <p className="text-gray-700">{selectedJob.jobrequirementskills}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Responsibilities</h3>
                <p className="text-gray-700">{selectedJob.jobresponsibilities}</p>
              </div>

              <button 
                onClick={closeModal}
                className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}