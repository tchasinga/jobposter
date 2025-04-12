"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion } from "framer-motion";
import ImgFive from "../Image/Img05.webp";
import ImgOne from "../Image/ImgOne.jpeg";
import ImgTwo from "../Image/ImgTwo.jpeg";
import ImgThree from "../Image/ImgThree.jpeg";
import ImageFour from "../Image/ImageFour.jpeg";

// Animation variants
const aboutSectionVariant = {
  offscreen: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariant = {
  offscreen: {
    opacity: 0,
    y: 20
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const statItemVariant = {
  offscreen: {
    opacity: 0,
    y: 30
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};

export default function AboutSection() {
  const imageContainerRef = useRef(null);
  const images = [ImgFive, ImgOne, ImgTwo, ImgThree, ImageFour];
  const currentImageIndex = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animation
    const startImageTransition = () => {
      intervalRef.current = setInterval(() => {
        gsap.to(imageContainerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            currentImageIndex.current = (currentImageIndex.current + 1) % images.length;
            forceUpdate();
            gsap.to(imageContainerRef.current, {
              opacity: 1,
              duration: 0.8,
              ease: "power2.inOut"
            });
          }
        });
      }, 5000);
    };

    startImageTransition();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      gsap.killTweensOf(imageContainerRef.current);
    };
  }, []);

  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  return (
    <motion.section 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={aboutSectionVariant}
      className="max-w-screen-2xl mx-auto w-full py-20 px-4"
    >
      {/* Section Header */}
      <motion.div variants={itemVariant} className="text-center pb-12">
        <h1 className="text-4xl font-bold text-white font-mono mb-4">About Our Platform</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Connecting African tech talent with world-class opportunities
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <motion.div 
          variants={itemVariant}
          className="lg:w-1/2 relative h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <div ref={imageContainerRef} className="relative h-full w-full">
            <Image
              src={images[currentImageIndex.current]}
              alt="Our team working"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={itemVariant} className="lg:w-1/2 space-y-6">
          <motion.h2 
            variants={itemVariant}
            className="text-3xl font-bold text-white"
          >
            Bridging the Gap in Tech Employment Across Africa
          </motion.h2>
          
          <motion.p variants={itemVariant} className="text-gray-300">
            We specialize in connecting talented professionals with innovative companies across 
            the African continent. Our platform focuses on five key domains that drive the 
            digital economy:
          </motion.p>

          <motion.ul 
            variants={aboutSectionVariant}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4"
          >
            {[
              "Affiliate Marketing",
              "Data/AI Solutions",
              "Web Development",
              "Programming",
              "Data Visualization",
              "Cloud Engineering"
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariant}
                className="flex items-center bg-gray-800/50 p-3 rounded-lg"
              >
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-300">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariant} className="pt-4">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To democratize access to tech employment opportunities across Africa by removing 
                geographical barriers and matching talent with the right opportunities based on 
                skills and aspirations.
              </p>
            </div>
          </motion.div>

          <motion.button 
            variants={itemVariant}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(37, 99, 235, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all"
          >
            Learn More About Us
          </motion.button>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        variants={aboutSectionVariant}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        {[
          { value: "40+", label: "Job Categories" },
          { value: "54", label: "African Countries" },
          { value: "10K+", label: "Professionals" },
          { value: "500+", label: "Partner Companies" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            variants={statItemVariant}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-gray-800 p-6 rounded-lg text-center border-t-4 border-blue-600 cursor-pointer"
          >
            <p className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</p>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}