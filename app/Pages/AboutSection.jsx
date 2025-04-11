"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import ImgFive from "../Image/Img05.webp";
import ImgOne from "../Image/ImgOne.jpeg";
import ImgTwo from "../Image/ImgTwo.jpeg";
import ImgThree from "../Image/ImgThree.jpeg";
import ImageFour from "../Image/ImageFour.jpeg";

export default function AboutSection() {
  const imageContainerRef = useRef(null);
  const images = [ImgFive, ImgOne, ImgTwo, ImgThree, ImageFour];
  const currentImageIndex = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animation
    const startImageTransition = () => {
      intervalRef.current = setInterval(() => {
        // Fade out current image
        gsap.to(imageContainerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            // Update image index (cycle through images)
            currentImageIndex.current = 
              (currentImageIndex.current + 1) % images.length;
            
            // Force re-render by updating state (we use a dummy state)
            forceUpdate();
            
            // Fade in new image
            gsap.to(imageContainerRef.current, {
              opacity: 1,
              duration: 0.8,
              ease: "power2.inOut"
            });
          }
        });
      }, 5000); // Change every 5 seconds
    };

    // Start the animation
    startImageTransition();

    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      gsap.killTweensOf(imageContainerRef.current);
    };
  }, []);

  // Dummy state to force re-render
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  return (
    <section className="max-w-screen-2xl mx-auto w-full py-20 px-4">
      {/* Section Header */}
      <div className="text-center pb-12">
        <h1 className="text-4xl font-bold text-white font-mono mb-4">About Our Platform</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Connecting African tech talent with world-class opportunities
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section with GSAP animation */}
        <div className="lg:w-1/2 relative h-96 rounded-xl overflow-hidden">
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
        </div>

        {/* Rest of your content remains the same */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Bridging the Gap in Tech Employment Across Africa
          </h2>
          
          <p className="text-gray-300">
            We specialize in connecting talented professionals with innovative companies across 
            the African continent. Our platform focuses on five key domains that drive the 
            digital economy:
          </p>

          <ul className="grid grid-cols-2 gap-4">
            {[
              "Affiliate Marketing",
              "Data/AI Solutions",
              "Web Development",
              "Programming",
              "Data Visualization",
              "Cloud Engineering"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To democratize access to tech employment opportunities across Africa by removing 
                geographical barriers and matching talent with the right opportunities based on 
                skills and aspirations.
              </p>
            </div>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Learn More About Us
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {[
          { value: "40+", label: "Job Categories" },
          { value: "54", label: "African Countries" },
          { value: "10K+", label: "Professionals" },
          { value: "500+", label: "Partner Companies" }
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</p>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}