"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { containerVariant } from "../../app/components/ui/animation"
import ImgOne from "../Image/ImgOne.jpeg";
import { FaFacebook, FaTelegram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Keeper() {
  const socialLinks = [
    { icon: <FaFacebook size={24} />, url: "https://facebook.com" },
    { icon: <FaTelegram size={24} />, url: "https://telegram.org" },
    { icon: <FaWhatsapp size={24} />, url: "https://whatsapp.com" },
    { icon: <FaEnvelope size={24} />, url: "mailto:example@example.com" }
  ];

  return (
    <div
      className="relative min-h-screen w-full object-fill max-w-full bg-fixed"
      style={{
        background: `linear-gradient(rgba(16, 16, 14, 0.80)), url(${ImgOne.src}) center / cover no-repeat`,
      }}
    >
      <div className='flex flex-col items-center justify-center h-screen max-w-screen-2xl mx-auto'>
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial="offscreen"
          whileInView={"onscreen"}
          variants={containerVariant()}
        >
          <h1 className='text-8xl font-bold text-white font-mono'>
            Get your dream<br/> jobs now
          </h1>
          <p className='text-lg font-mono py-4'>Apply by submitting your resume and more details about your careers</p>
          
          {/* Social Media Icons */}
          <motion.div 
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}