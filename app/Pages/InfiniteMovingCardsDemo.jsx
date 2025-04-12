"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Thanks to this platform, I landed my dream job as a Data Visualization Specialist in Nairobi. The process was smooth and the opportunities were exactly what I was looking for!",
    name: "Amani Okoye",
    title: "Data Visualization Expert",
  },
  {
    quote:
      "After months of searching, I found the perfect remote AI engineering position through this platform. They truly understand the African tech market.",
    name: "Kwame Nkrumah",
    title: "AI Engineer",
  },
  {
    quote: "This platform connected me with international clients looking for my affiliate marketing skills. My income has tripled in just 6 months!",
    name: "Fatoumata Diallo",
    title: "Affiliate Marketer",
  },
  {
    quote:
      "I was skeptical at first, but the quality of programming jobs here is outstanding. I'm now working for a top fintech company in Lagos.",
    name: "Chinedu Eze",
    title: "Senior Python Developer",
  },
  {
    quote:
      "The job matching algorithm is incredible! It found me a position that perfectly fits my skills in cloud architecture.",
    name: "Naledi Khumalo",
    title: "Cloud Architect",
  },
  {
    quote:
      "As a female developer, I was nervous about job hunting. This platform gave me opportunities with companies that value diversity and inclusion.",
    name: "Amina Mohammed",
    title: "Full Stack Developer",
  },
  {
    quote: "From Rwanda to the world! I'm now working remotely for a Silicon Valley startup thanks to this platform.",
    name: "Jean de Dieu",
    title: "Machine Learning Specialist",
  },
  {
    quote:
      "The career coaching and interview preparation resources helped me stand out. I've doubled my salary in my new data engineering role.",
    name: "Tunde Okafor",
    title: "Data Engineer",
  },
  {
    quote: "I found three clients for my digital marketing services within my first week on the platform. Life-changing!",
    name: "Zahara Abdi",
    title: "Digital Marketing Consultant",
  },
  {
    quote:
      "After graduating, I struggled to find work. This platform helped me land my first job as a junior developer at an exciting startup.",
    name: "David Kamau",
    title: "Junior Software Engineer",
  },
  {
    quote:
      "The remote work opportunities here allowed me to stay in Ghana while working for European companies. Best of both worlds!",
    name: "Esi Asante",
    title: "Frontend Developer",
  },
  {
    quote: "I transitioned from traditional marketing to tech through their upskilling resources and job connections.",
    name: "Oluwaseun Adebayo",
    title: "Tech Product Marketer",
  },
  {
    quote:
      "My data visualization portfolio got noticed by multiple employers through this platform. Signed a great contract within two weeks!",
    name: "Lebo Moloi",
    title: "Data Visualization Designer",
  },
  {
    quote:
      "As a self-taught programmer, I doubted I could find professional work. This platform proved me wrong with multiple offers.",
    name: "Jabari Sow",
    title: "JavaScript Developer",
  },
  {
    quote: "The salary negotiation tips helped me secure a package 30% higher than I expected for my AI research role.",
    name: "Ifeoma Chukwu",
    title: "AI Research Scientist",
  },
  {
    quote:
      "Working remotely for a Canadian company while living in Senegal - this platform made my career dreams possible!",
    name: "Mariama Diop",
    title: "DevOps Engineer",
  },
  {
    quote: "Their job matching service found me the perfect startup that aligns with my values and technical skills.",
    name: "Thando Ndlovu",
    title: "Blockchain Developer",
  },
  {
    quote:
      "After being laid off, this platform helped me bounce back quickly with an even better position in data analysis.",
    name: "Mohamed Hassan",
    title: "Data Analyst",
  },
  {
    quote: "I now mentor other African women in tech thanks to the opportunities and network I gained through this platform.",
    name: "Ngozi Eze",
    title: "Senior Engineering Manager",
  },
  {
    quote:
      "The verification system gave me confidence in employers, and my profile got me noticed by top companies in my field.",
    name: "Kofi Mensah",
    title: "Cybersecurity Specialist",
  },
];