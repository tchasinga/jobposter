import React from 'react'
import getjobs from '../../constant/joblisting'
import Image from 'next/image'

export default function Jobs() {
  return (
    <div className='max-w-screen-2xl mx-auto w-full py-20'>
         <div className='bg-slate-300 flex gap-4 flex-wrap justify-center items-center py-4 rounded-full'>

            <div className='bg-slate-800 text-white px-10 py-2 rounded-full'>
                <p>Show all</p>     
            </div>

            <div className='bg-slate-800 text-white px-10 py-2 rounded-full'>
               <p>Data Visualization</p>
            </div>

            <div className='bg-slate-800 text-white px-10 py-2 rounded-full'>
               <p>Affiale marketer</p>
            </div>

            <div className='bg-slate-800 text-white px-10 py-2 rounded-full'>
               <p>Data/AI</p>
            </div>

            <div className='bg-slate-800 text-white px-10 py-2 rounded-full'>
               <p>Development</p>
            </div>

            <div className='bg-slate-800 text-white px-10 py-2 rounded-full'>
               <p>Programming</p>
            </div>

         </div>

         {/* Jo listing is added now */}
            <div className='newproductgrid py-5 '>
                {getjobs.map((job) => (
                    <div className='bg-gray-900 p-4 rounded-xl relative flex flex-col items-center' key={job.id}>
                        <div className='newproductcardtop'>
                            <Image src={job.cardImgIcon} alt="" />
                        </div>
                        <div className='bg-[#309EC4] w-[70%] p-1 font-medium rounded-r-xl absolute  left-0 top-[60%]  '>
                            <h1>{job.salary}</h1>
                        </div>
                        <div className='flex items-center justify-center font-bold text-white'>
                            <h1>{job.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}
