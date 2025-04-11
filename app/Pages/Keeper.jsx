"use client";
import React from 'react';
import ImgOne from "../Image/ImgOne.jpeg";
import ImgTwo from "../Image/ImgTwo.jpeg";
import ImgThree from "../Image/ImgThree.jpeg";
import ImageFour from "../Image/ImageFour.jpeg";
import ImgFive from "../Image/Img05.webp";



export default function Keeper() {
  return (
    <div
      className="relative h-[550px] w-full object-fill max-w-full bg-fixed"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${ImgOne.src}) center / cover no-repeat`,
      }}
    >
    </div>
  );
}

