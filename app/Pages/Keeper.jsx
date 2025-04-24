"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { containerVariant } from "../../app/components/ui/animation";
import ImgOne from "../Image/ImgOne.jpeg";
import ImgTwo from "../Image/ImgTwo.jpeg";
import ImgThree from "../Image/ImgThree.jpeg";
import ImgFour from "../Image/ImageFour.jpeg";
import ImgFive from "../Image/Img05.webp";
import Image from "next/image";
import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaShareAlt,
} from "react-icons/fa";

export default function Keeper() {
  const [showSocial, setShowSocial] = useState(false);
  const socialLinks = [
    { icon: <FaFacebook size={24} />, url: "https://facebook.com" },
    { icon: <FaTelegram size={24} />, url: "https://telegram.org" },
    { icon: <FaWhatsapp size={24} />, url: "https://whatsapp.com" },
    { icon: <FaEnvelope size={24} />, url: "mailto:example@example.com" },
  ];

  return (
    <div
      className="relative min-h-screen w-full object-fill max-w-full bg-fixed"
      style={{
        background: `linear-gradient(rgba(16, 16, 14, 0.80)), url(${ImgOne.src}) center / cover no-repeat`,
      }}
    >
      {/* Fixed Social Media Button */}
      <motion.div
        className="fixed right-8 bottom-8 z-50 flex flex-col items-end gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {showSocial && (
          <motion.div
            className="flex flex-col gap-3 p-4 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
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
        )}
        <button
          onClick={() => setShowSocial(!showSocial)}
          className="p-4 bg-black/80 hover:bg-black text-white rounded-full shadow-lg transition-all duration-300"
        >
          <FaShareAlt size={20} />
        </button>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center h-screen max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 z-10"
          initial="offscreen"
          whileInView={"onscreen"}
          variants={containerVariant()}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-mono mb-6"
            variants={containerVariant(0.2)}
          >
            Get your dream
            <br /> jobs now
          </motion.h1>
          <motion.p
            className="text-lg font-mono py-4 max-w-lg text-white/90"
            variants={containerVariant(0.4)}
          >
            Apply by submitting your resume and more details about your careers
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8"
            variants={containerVariant(0.6)}
          >
            <div id="jobs">
              {" "}
              {/* Remove the # from the id attribute */}
              <button
                className="px-8 py-3 bg-white text-black font-mono rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("jobs")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Browse Jobs
              </button>
            </div>
            <button className="px-8 py-3 border-2 border-white text-white font-mono rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Post Resume
            </button>
          </motion.div>
        </motion.div>

        {/* Overlapping Images */}
        <motion.div
          className="relative hidden lg:block lg:w-1/2 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Main image */}
          <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-xl overflow-hidden shadow-2xl z-20">
            <Image
              src={ImgTwo}
              alt="Professional working"
              fill
              className="object-cover"
              quality={100}
            />
          </motion.div>

          {/* Left image */}
          <motion.div className="absolute top-1/3 left-0 w-48 h-48 rounded-lg overflow-hidden shadow-xl border-2 border-white/50 z-10">
            <Image
              src={ImgThree}
              alt="Team meeting"
              fill
              className="object-cover"
              quality={100}
            />
          </motion.div>

          {/* Right image */}
          <motion.div className="absolute bottom-1/3 right-0 w-56 h-56 rounded-lg overflow-hidden shadow-xl z-10">
            <Image
              src={ImgFour}
              alt="Office workspace"
              fill
              className="object-cover"
              quality={100}
            />
          </motion.div>

          {/* Small decorative image */}
          <motion.div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-lg overflow-hidden shadow-lg border-2 border-white/30">
            <Image
              src={ImgFive}
              alt="Interview"
              fill
              className="object-cover"
              quality={100}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() > 0.5 ? 1 : -1) * 20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
