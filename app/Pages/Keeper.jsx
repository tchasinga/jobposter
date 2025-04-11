"use client";
import React from 'react';
import ImgOne from "../Image/ImgOne.jpeg";
import ImgTwo from "../Image/ImgTwo.jpeg";
import ImgThree from "../Image/ImgThree.jpeg";
import ImageFour from "../Image/ImageFour.jpeg";
import ImgFive from "../Image/Img05.webp";
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
    </div>
  );
}

