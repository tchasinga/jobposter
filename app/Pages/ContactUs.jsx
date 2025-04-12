"use client"
import React from 'react';
import { FaTelegram, FaWhatsapp, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full py-20 px-4" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. 
          Reach out to us through any of these channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Our Office</h4>
                <p className="text-gray-300">123 Tech Avenue, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Call Us</h4>
                <p className="text-gray-300">+254 791 484408</p>
                <p className="text-gray-300">+254 720 987 654</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaClock className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Working Hours</h4>
                <p className="text-gray-300">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
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
                  href="https://wa.me/254700123456" 
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
                  href="mailto:info@yourdomain.com" 
                  className="bg-gray-700 hover:bg-red-500 text-white p-3 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="What's this about?"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;