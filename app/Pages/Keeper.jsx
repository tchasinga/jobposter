"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { containerVariant } from "../../app/components/ui/animation"

import ImgOne from "../Image/ImgOne.jpeg";
import Navbars from './Navbars';


export default function Keeper() {
  return (
    <div
      className="relative min-h-screen w-full object-fill max-w-full bg-fixed"
      style={{
        background: `linear-gradient(rgba(16, 16, 14, 0.80)), url(${ImgOne.src}) center / cover no-repeat`,
      }}
    >
      <Navbars />

      <div className='flex flex-col items-center justify-center h-screen max-w-screen-2xl mx-auto'>
        <motion.div className="flex flex-col items-center justify-center text-center"
        initial="offscreen"
        whileInView={"onscreen"}
        variants={containerVariant()}
        >
          <h1 className='text-8xl font-bold text-white font-mono'>
          Get your dream<br/> jobs now
          </h1>
          <p className='text-lg font-mono py-4'>Apply by submitting your resume and more details about your careers</p>
          <button className='bg-[#309EC4] w-1/2 text-white px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-green-600 duration-500 font-mono'>Get Started</button>
        </motion.div>
      </div>
    </div>
  );
}