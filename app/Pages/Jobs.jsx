"use client"
import React, { useState } from 'react';
import getjobs from '../../constant/joblisting';
import Image from 'next/image';

export default function Jobs() {
  const [filter, setFilter] = useState('all');

  const filteredJobs = filter === 'all' 
    ? getjobs 
    : getjobs.filter(job => job.typeofcarees === filter);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <div className='max-w-screen-2xl mx-auto w-full py-20'>
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
          <div className='bg-gray-900 p-4 rounded-xl relative flex flex-col items-center nimter' key={job.id}>
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
    </div>
  );
}