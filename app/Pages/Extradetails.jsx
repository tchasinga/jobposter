"use client"
import React from 'react'
import CountUp from 'react-countup'

export default function Extradetails() {
  return (
    <div className="mt-20 max-w-screen-2xl mx-auto w-full flex justify-between items-center">
      <div className="items-center flex gap-10 flex-wrap ">
        <div className="text-white">
          <h1 className='text-2xl font-light'>
            <CountUp end={500} suffix="k+ Jobs" duration={10}/>
          </h1>
          <p className='text-sm text-slate-400'>Active Job Listings</p>
        </div>

        <div className="text-white">
          <h1 className='text-2xl font-light'>
            <CountUp end={300} suffix="k+ Hires" duration={10}/>
          </h1>
          <p className='text-sm text-slate-400'>Successful Placements</p>
        </div>

        <div className="text-white">
          <h1 className='text-2xl font-light'>
            <CountUp end={10} suffix="k+ Companies" duration={10}/>
          </h1>
          <p className='text-sm text-slate-400'>Trusted Employers</p>
        </div>
      </div>
      
      <div className='font-light'>
          <h1 className='text-3xl font-light text-slate-200'>Find your dream job</h1>
      </div>
    </div>
  )
}