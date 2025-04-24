import React from 'react';
import { FiBook, FiFileText, FiShield, FiUser, FiBriefcase, FiLock, FiAlertCircle, FiGlobe } from 'react-icons/fi';
import nodesimage from "../Image/slider1.webp";
import Image from 'next/image';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#141412] text-[#FFFFE3]">
      {/* Hero Section with Floating Elements */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms & <span className="text-blue-400">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Please read these terms carefully before using our job platform. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <div className="flex flex-col gap-1">
              <p>the terms of</p>
              <p>the legal contract between you and your customer for your supply of</p>
              <p>goods or services, and which regulates your business relationship.</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <Image 
                src={nodesimage} 
                alt="Terms and Conditions" 
                className="z-10 relative"
                width={600}
                height={400}
              />
              
              {/* Floating elements around the image */}
              <div className="absolute -top-8 -left-8 bg-blue-600/80 text-white p-3 rounded-full shadow-lg animate-float1">
                <FiFileText size={24} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-500/80 text-white p-4 rounded-full shadow-lg animate-float2">
                <FiShield size={28} />
              </div>
              <div className="absolute top-1/4 -right-10 bg-white/90 text-blue-600 p-3 rounded-lg shadow-lg animate-float3">
                <span className="font-medium">Privacy</span>
              </div>
              <div className="absolute bottom-1/4 -left-10 bg-white/90 text-blue-600 p-3 rounded-lg shadow-lg animate-float4">
                <span className="font-medium">Security</span>
              </div>
              <div className="absolute top-10 right-20 bg-blue-400/90 text-white p-2 rounded-full shadow-lg animate-float5">
                <FiLock size={20} />
              </div>
              <div className="absolute bottom-10 left-20 bg-blue-400/90 text-white p-2 rounded-full shadow-lg animate-float6">
                <FiUser size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-[#1E1E1C] rounded-xl p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
                  <FiBook className="mr-2" /> Quick Navigation
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#introduction" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                      <FiFileText className="mr-2" /> Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#accounts" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                      <FiUser className="mr-2" /> User Accounts
                    </a>
                  </li>
                  <li>
                    <a href="#job-postings" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                      <FiBriefcase className="mr-2" /> Job Postings
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                      <FiLock className="mr-2" /> Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#liability" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                      <FiShield className="mr-2" /> Liability
                    </a>
                  </li>
                  <li>
                    <a href="#changes" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                      <FiAlertCircle className="mr-2" /> Changes to Terms
                    </a>
                  </li>
                  <li>
                    <a href="#jurisdiction" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                      <FiGlobe className="mr-2" /> Jurisdiction
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Main Terms Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction Section */}
              <div id="introduction" className="bg-[#1E1E1C] rounded-xl p-8">
                <div className="flex items-start mb-8">
                  <div className="mr-6">
                    <Image 
                      src="https://img.freepik.com/premium-photo/midsection-person-holding-book-with-text_1048944-12444205.jpg" 
                      alt="Introduction" 
                      width={200}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Introduction</h2>
                    <p className="text-gray-300 mb-4">
                      Welcome to our job platform. These Terms & Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms.
                    </p>
                    <p className="text-gray-300">
                      Our platform connects job seekers with employers and provides various tools and services to facilitate the hiring process. These terms apply to all users, including visitors, job seekers, employers, and recruiters.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* User Accounts Section */}
              <div id="accounts" className="bg-[#1E1E1C] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">2. User Accounts</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Account Creation</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        You must provide accurate and complete information when creating an account.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        You are responsible for maintaining the confidentiality of your account credentials.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        You must be at least 18 years old to create an account.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image 
                      src="https://img.freepik.com/free-photo/businessman-consulting-legal-expert_74855-1103.jpg" 
                      alt="User Accounts" 
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800">
                  <h3 className="text-xl font-semibold mb-3 text-white">Account Responsibilities</h3>
                  <p className="text-gray-300 mb-4">
                    You are solely responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other security breaches.
                  </p>
                  <p className="text-gray-300">
                    We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent or harmful activities.
                  </p>
                </div>
              </div>
              
              {/* Job Postings Section */}
              <div id="job-postings" className="bg-[#1E1E1C] rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-start mb-8">
                  <div className="md:mr-6 mb-6 md:mb-0">
                    <Image 
                      src="https://img.freepik.com/premium-photo/close-up-form-laptop-table_1048944-6204945.jpg" 
                      alt="Job Postings" 
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Job Postings</h2>
                    <h3 className="text-xl font-semibold mb-3 text-white">Employer Responsibilities</h3>
                    <p className="text-gray-300 mb-4">
                      Employers must ensure that all job postings are accurate, complete, and comply with all applicable laws. Job postings must not contain discriminatory language or requirements.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-white">Prohibited Content</h3>
                    <p className="text-gray-300">
                      Job postings must not contain false or misleading information, pyramid schemes, or any illegal opportunities. We reserve the right to remove any job posting that violates these terms.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#2A2A28] p-5 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Job Seeker Expectations</h4>
                    <p className="text-gray-300">
                      Job seekers must provide accurate information in their profiles and applications. Misrepresentation of qualifications or experience may result in account termination.
                    </p>
                  </div>
                  <div className="bg-[#2A2A28] p-5 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Application Process</h4>
                    <p className="text-gray-300">
                      Applying to jobs through our platform does not guarantee employment. The hiring process and decisions are solely the responsibility of the employers.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Privacy Policy Section */}
              <div id="privacy" className="bg-[#1E1E1C] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">4. Privacy Policy</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <Image 
                      src="https://img.freepik.com/free-photo/businesswoman-signing-contract_74855-1119.jpg" 
                      alt="Privacy Policy" 
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Data Collection</h3>
                    <p className="text-gray-300 mb-4">
                      We collect personal information necessary to provide our services, including but not limited to name, contact information, employment history, and education.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-white">Data Usage</h3>
                    <p className="text-gray-300">
                      Your information may be used to match you with potential employers, improve our services, and communicate with you about opportunities and platform updates.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800">
                  <h3 className="text-xl font-semibold mb-3 text-white">Data Protection</h3>
                  <p className="text-gray-300">
                    We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
              
              {/* Liability Section */}
              <div id="liability" className="bg-[#1E1E1C] rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-start mb-8">
                  <div className="md:mr-6 mb-6 md:mb-0">
                    <Image 
                      src="https://img.freepik.com/free-photo/businessman-businesswoman-signing-contract_74855-3970.jpg" 
                      alt="Liability" 
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Liability</h2>
                    <h3 className="text-xl font-semibold mb-3 text-white">Platform as Intermediary</h3>
                    <p className="text-gray-300 mb-4">
                      Our platform serves as an intermediary between job seekers and employers. We are not responsible for the accuracy of job postings, the hiring decisions of employers, or the qualifications of applicants.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-white">No Warranty</h3>
                    <p className="text-gray-300">
                      We provide our services "as is" without warranties of any kind. We do not guarantee that the platform will be uninterrupted, error-free, or meet your specific requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Changes to Terms Section */}
              <div id="changes" className="bg-[#1E1E1C] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">6. Changes to Terms</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Modification Rights</h3>
                    <p className="text-gray-300 mb-4">
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the platform. Your continued use of the platform constitutes acceptance of the modified terms.
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-white">Notification</h3>
                    <p className="text-gray-300">
                      We will make reasonable efforts to notify users of significant changes to these terms through email or platform notifications.
                    </p>
                  </div>
                  <div>
                    <Image 
                      src="https://img.freepik.com/free-photo/close-up-business-document-laptop-desk_1098-1991.jpg" 
                      alt="Changes to Terms" 
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* Jurisdiction Section */}
              <div id="jurisdiction" className="bg-[#1E1E1C] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Jurisdiction</h2>
                <div className="bg-[#2A2A28] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Governing Law</h3>
                  <p className="text-gray-300 mb-4">
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction where our company is registered, without regard to its conflict of law provisions.
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-white">Dispute Resolution</h3>
                  <p className="text-gray-300">
                    Any disputes arising from these terms or your use of the platform shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration association.
                  </p>
                </div>
              </div>
              
              {/* Acceptance Section */}
              <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  By using our job platform, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our platform.
                </p>
                <p className="text-gray-400">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#1E1E1C] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#2A2A28]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white">JobPlatform</h3>
              <p className="text-gray-400 mt-2">Connecting talent with opportunity</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#2A2A28] text-center text-gray-500">
            <p>© {new Date().getFullYear()} JobPlatform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}