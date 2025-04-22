"use client"
import React from 'react';
import { FaTelegram, FaWhatsapp, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="max-w-screen mx-auto w-full py-20 px-4" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We're here to help and answer any questions you might have about job opportunities. 
          Reach out to us through any of these channels.
        </p>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Information */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="">
                <div className="flex gap-4">
                  <a 
                    href="https://t.me/yourchannel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="text-xl" />
                  </a>
                  <a 
                    href="https://wa.me/254742601060" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-green-500 text-white p-3 rounded-full transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                  <a 
                    href="https://facebook.com/yourpage" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a 
                    href="mailto:info@rondamo.co.ke" 
                    className="bg-gray-700 hover:bg-red-500 text-white p-3 rounded-full transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Company Info */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">Kuvosh Jobs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Shipping policy</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Grading & Warranties</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Mpesa payment</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-center">
                © 2025 Kuvosh Jobs Technologies. All Rights Reserved. Terms and Condition apply
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;