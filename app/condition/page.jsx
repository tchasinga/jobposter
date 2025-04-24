import React from 'react';
import Head from 'next/head';
import { FaShieldAlt, FaLock, FaUserCheck, FaFileContract, FaBalanceScale, FaGavel, FaBook, FaHandshake } from 'react-icons/fa';
import { MdPrivacyTip, MdOutlinePolicy, MdSecurity } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';
import { BsFillTerminalFill } from 'react-icons/bs';
import nodesimage from "../Image/slider1.webp";
import Image from 'next/image';

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | JobConnect</title>
        <meta name="description" content="Review our terms and conditions for using JobConnect platform" />
      </Head>

      {/* Animated Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-yellow-400">Terms & Conditions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Please read these terms carefully before using our platform. By accessing or using JobConnect, you agree to be bound by these terms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition duration-300">
                Get Started
              </button>
              <button className="px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold rounded-lg transition duration-300">
                Contact Support
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <Image 
                src={nodesimage} 
                alt="Terms and Conditions" 
                width={600} 
                height={600}
                className="rounded-lg z-10 relative"
              />
              
              {/* Animated floating elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-500/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float1">
                <span className="text-xs font-bold text-yellow-400 flex items-center">
                  <FaFileContract className="mr-1" /> Agreement
                </span>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-500/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float2">
                <span className="text-xs font-bold text-blue-400 flex items-center">
                  <FaLock className="mr-1" /> Security
                </span>
              </div>
              
              <div className="absolute top-1/4 -right-12 w-16 h-16 bg-green-500/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float3">
                <span className="text-xs font-bold text-green-400 flex items-center">
                  <FaUserCheck className="mr-1" /> Privacy
                </span>
              </div>
              
              <div className="absolute bottom-1/4 -left-12 w-20 h-20 bg-purple-500/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float4">
                <span className="text-xs font-bold text-purple-400 flex items-center">
                  <FaGavel className="mr-1" /> Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">Terms of Service</h2>
              <p className="text-gray-300">Last Updated: May 15, 2024</p>
            </div>

            <div className="space-y-12">
              {/* Introduction */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaBook className="mr-3 text-yellow-400" /> Introduction
                </h3>
                <p className="text-gray-300 mb-4">
                  Welcome to JobConnect ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service").
                </p>
                <p className="text-gray-300">
                  By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, you may not access the Service.
                </p>
              </div>

              {/* Accounts */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaUserCheck className="mr-3 text-blue-400" /> User Accounts
                </h3>
                <p className="text-gray-300 mb-4">
                  To access certain features of the Service, you must register for an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                  <li>Notify us immediately if you discover or suspect any security breaches</li>
                  <li>Take responsibility for all activities that occur under your account</li>
                </ul>
                <div className="mt-6 flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-gray-700/50 p-4 rounded-lg">
                    <Image 
                      src="https://img.freepik.com/premium-photo/midsection-person-holding-book-with-text_1048944-12444205.jpg" 
                      alt="User holding contract" 
                      width={400} 
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="mt-3 text-sm text-gray-400">Users must maintain accurate account information</p>
                  </div>
                  <div className="flex-1 bg-gray-700/50 p-4 rounded-lg">
                    <Image 
                      src="https://img.freepik.com/free-photo/businessman-consulting-legal-expert_74855-1103.jpg" 
                      alt="Legal consultation" 
                      width={400} 
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="mt-3 text-sm text-gray-400">We recommend reviewing terms with legal counsel if needed</p>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <BsFillTerminalFill className="mr-3 text-green-400" /> Job Listings & Applications
                </h3>
                <p className="text-gray-300 mb-4">
                  Employers posting jobs on JobConnect agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                  <li>Provide accurate and non-discriminatory job descriptions</li>
                  <li>Comply with all applicable employment laws and regulations</li>
                  <li>Not post fraudulent, misleading, or illegal job opportunities</li>
                  <li>Respond to applicants in a timely manner</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Job seekers agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Provide truthful information in applications</li>
                  <li>Not apply for jobs for which they are clearly unqualified</li>
                  <li>Not harass employers or other users</li>
                  <li>Not use the Service for any unlawful purpose</li>
                </ul>
              </div>

              {/* Privacy */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <MdPrivacyTip className="mr-3 text-purple-400" /> Privacy & Data Protection
                </h3>
                <p className="text-gray-300 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share your personal information.
                </p>
                <div className="mt-6 bg-gray-700/50 p-4 rounded-lg">
                  <Image 
                    src="https://img.freepik.com/premium-photo/close-up-form-laptop-table_1048944-6204945.jpg" 
                    alt="Data privacy" 
                    width={800} 
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                  <p className="mt-3 text-sm text-gray-400">We implement industry-standard security measures to protect your data</p>
                </div>
              </div>

              {/* Payments */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <RiRefund2Fill className="mr-3 text-red-400" /> Payments & Refunds
                </h3>
                <p className="text-gray-300 mb-4">
                  Certain premium services may require payment. By using these services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                  <li>Pay all fees and charges associated with your account</li>
                  <li>Provide valid payment information</li>
                  <li>Authorize us to charge your payment method for applicable fees</li>
                </ul>
                <p className="text-gray-300">
                  Refund policies vary by service and are outlined at the point of purchase. Generally, subscription fees are non-refundable except where required by law.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-indigo-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaBalanceScale className="mr-3 text-indigo-400" /> Intellectual Property
                </h3>
                <p className="text-gray-300 mb-4">
                  The Service and its original content, features, and functionality are owned by JobConnect and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-gray-700/50 p-4 rounded-lg">
                    <Image 
                      src="https://img.freepik.com/free-photo/businesswoman-signing-contract_74855-1119.jpg" 
                      alt="Signing contract" 
                      width={400} 
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="mt-3 text-sm text-gray-400">All content remains the property of JobConnect</p>
                  </div>
                  <div className="flex-1 bg-gray-700/50 p-4 rounded-lg">
                    <Image 
                      src="https://img.freepik.com/free-photo/close-up-business-document-laptop-desk_1098-1991.jpg" 
                      alt="Legal documents" 
                      width={400} 
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                    <p className="mt-3 text-sm text-gray-400">Unauthorized use is strictly prohibited</p>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-pink-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaShieldAlt className="mr-3 text-pink-400" /> Termination
                </h3>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-300">
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaGavel className="mr-3 text-yellow-400" /> Governing Law
                </h3>
                <p className="text-gray-300 mb-4">
                  These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-300">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect.
                </p>
              </div>

              {/* Changes */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <MdOutlinePolicy className="mr-3 text-blue-400" /> Changes to Terms
                </h3>
                <p className="text-gray-300 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <div className="mt-6 bg-gray-700/50 p-4 rounded-lg">
                  <Image 
                    src="https://img.freepik.com/free-photo/businessman-businesswoman-signing-contract_74855-3970.jpg" 
                    alt="Reviewing terms" 
                    width={800} 
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                  <p className="mt-3 text-sm text-gray-400">We recommend periodically reviewing the Terms for changes</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaHandshake className="mr-3 text-green-400" /> Contact Us
                </h3>
                <p className="text-gray-300">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="mt-2 text-yellow-400">
                  legal@jobconnect.example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-yellow-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ready to find your dream job?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've found their perfect match through JobConnect.
          </p>
          <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition duration-300">
            Create Free Account
          </button>
        </div>
      </section>

      
    </>
  );
}