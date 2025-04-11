"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ImgOne from "../Image/ImgOne.jpeg";
import ImgTwo from "../Image/ImgTwo.jpeg";
import ImgThree from "../Image/ImgThree.jpeg";
import ImageFour from "../Image/ImageFour.jpeg";
import ImgFive from "../Image/Img05.webp";
import Navbars from './Navbars';
import Extradetails from './Extradetails';

const autobackgroundchange = [ImgOne, ImgTwo, ImgThree, ImageFour, ImgFive];
const headlines = [
  "Get your dream jobs now",
  "Discover amazing job offers",
  "Find your perfect career",
  "Opportunities await you",
  "Upgrade your professional life",
  "Step into your future today",
  "Apply now and get hired",
  "Turn your skills into success"
];

export default function Keeper() {
  const bgRef = useRef(null);
  const h1Ref = useRef(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  // Background image loop
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (bgIndex + 1) % autobackgroundchange.length;

      gsap.to(bgRef.current, {
        opacity: 1,
        onComplete: () => {
          setBgIndex(nextIndex);
          gsap.to(bgRef.current, {
            opacity: 1,
          });
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [bgIndex]);

  // Headline text loop
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(h1Ref.current, {
        opacity: 0,
        y: 20, // move up slightly
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setHeadlineIndex((prev) => (prev + 1) % headlines.length);
          gsap.fromTo(
            h1Ref.current,
            { opacity: 0, y: 20 }, // start below, invisible
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            }
          );
        },
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div
      ref={bgRef}
      className="relative min-h-screen w-full object-fill max-w-full bg-fixed"
      style={{
        background: `linear-gradient(rgba(16, 16, 14, 0.80)), url(${autobackgroundchange[bgIndex].src}) center / cover no-repeat`,
        transition: "background-image  0.5s ease",
      }}
    >
      <Navbars />

      {/* adding a menu details side */}
      <div className='flex flex-col items-center justify-center h-screen max-w-screen-2xl mx-auto'>
        <div className="flex flex-col items-center justify-center text-center">
          <h1
            ref={h1Ref}
            className='text-8xl font-bold text-white font-mono transition-opacity duration-500'
          >
            {headlines[headlineIndex].split(' ').slice(0, 3).join(' ')}<br />{headlines[headlineIndex].split(' ').slice(3).join(' ')}
          </h1>
          <p className='text-lg font-mono py-4'>Apply by submitting your resume and more details about your careers</p>
          <button className='bg-[#309EC4] w-1/2 text-white px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-green-600 duration-500 font-mono'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
