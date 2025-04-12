"use client"
import React, { useState } from 'react';
import { FaTelegram, FaFileUpload, FaCheck } from 'react-icons/fa';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    gender: '',
    telegram: '',
    resume: null,
    confirmation: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    const telegramRegex = /^@\w+$/;

    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.gender) newErrors.gender = 'Please select your gender';
    if (!formData.telegram.trim()) {
      newErrors.telegram = 'Telegram username is required';
    } else if (!telegramRegex.test(formData.telegram)) {
      newErrors.telegram = 'Telegram must start with @ (e.g., @username)';
    }
    if (!formData.resume) newErrors.resume = 'Please upload your resume';
    if (!formData.confirmation) newErrors.confirmation = 'You must confirm the information is accurate';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            username: '',
            email: '',
            phone: '',
            gender: '',
            telegram: '',
            resume: null,
            confirmation: false
          });
          setIsSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg my-20">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Job Application Form</h2>
      
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <FaCheck className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Application Submitted!</h3>
          <p className="text-gray-300">Thank you for your application. We'll review your information and contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border ${errors.username ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
              placeholder="Enter your full name"
            />
            {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
              placeholder="+254 700 123 456"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                />
                <span className="ml-2 text-gray-300">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                />
                <span className="ml-2 text-gray-300">Female</span>
              </label>
            </div>
            {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
          </div>

          {/* Telegram */}
          <div>
            <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-1">
              Telegram Username <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaTelegram className="text-gray-400" />
              </div>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 bg-gray-700 border ${errors.telegram ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
                placeholder="@username"
              />
            </div>
            {errors.telegram && <p className="mt-1 text-sm text-red-500">{errors.telegram}</p>}
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">
              Upload Resume (PDF/DOC) <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="resume"
              className={`flex flex-col items-center justify-center w-full py-6 border-2 border-dashed ${errors.resume ? 'border-red-500' : 'border-gray-600'} rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-700/50`}
            >
              <div className="flex flex-col items-center justify-center">
                <FaFileUpload className="w-8 h-8 mb-3 text-gray-400" />
                <p className="text-sm text-gray-400">
                  {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max. 5MB)</p>
              </div>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            {errors.resume && <p className="mt-1 text-sm text-red-500">{errors.resume}</p>}
          </div>

          {/* Confirmation Checkbox */}
          <div className="pt-2">
            <div className={`p-4 border ${errors.confirmation ? 'border-red-500 bg-red-500/10' : 'border-gray-600 bg-gray-700/50'} rounded-lg`}>
              <label className="inline-flex items-start">
                <input
                  type="checkbox"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  className={`h-5 w-5 mt-0.5 ${errors.confirmation ? 'text-red-500' : 'text-blue-600'} rounded focus:ring-blue-500 border-gray-600 bg-gray-700`}
                />
                <span className="ml-3 text-gray-300">
                  I confirm that all the information provided in my resume is true, complete, and accurate to the best of my knowledge. I understand that any false or misleading information may result in disqualification from consideration or termination if discovered later.
                </span>
              </label>
            </div>
            {errors.confirmation && <p className="mt-1 text-sm text-red-500">{errors.confirmation}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default JobApplicationForm;