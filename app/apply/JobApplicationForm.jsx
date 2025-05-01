"use client";
import React, { useState } from "react";
import { FaTelegram, FaFileUpload, FaCheck, FaUser, FaGlobe, FaEnvelope, FaBriefcase, FaMoneyBillWave, FaChartLine, FaPhone, FaBuilding, FaTrophy, FaCalendarAlt, FaFileAlt, FaInfoCircle } from "react-icons/fa";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from "../firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const JobApplicationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    country: "",
    email: "",
    telegramUsername: "",
    appliedJobs: "",
    salaryExpectation: "",
    experienceLevel: "",
    uploadResume: "",
    validedPhonenumber: "",
    casinoExperience: false,
    strokeIgaming: false,
    previousCompany: "",
    previousAchievements: "",
    availability: "",
    agreeTerms: false,
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(""); // Added for upload status tracking
  const [isSubmiting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (file) => {
    if (!file) return;
    
    setUploadStatus("Uploading...");
    const storage = getStorage(app);
    const storageRef = ref(storage, `resumes/${file.name}-${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        setUploadStatus(`Uploading: ${Math.round(progress)}%`);
      },
      (error) => {
        console.error("File upload error:", error);
        setUploadStatus("Upload failed. Please try again.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevData) => ({
            ...prevData,
            uploadResume: downloadURL,
          }));
          setUploadStatus("Upload complete!");
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("https://kuvoshadmin.vercel.app/api/applicants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/success');
        toast.success("Application submitted successfully!");
        setIsSubmitting(false);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen py-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Job Application Form</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Information Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaUser className="mr-2 text-blue-500" /> Personal Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-medium flex items-center">
                <FaUser className="mr-2 text-gray-500" /> Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaGlobe className="mr-2 text-gray-500" /> Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="e.g. Kenya"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaEnvelope className="mr-2 text-gray-500" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaTelegram className="mr-2 text-gray-500" /> Telegram Username
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="telegramUsername"
                  value={formData.telegramUsername}
                  onChange={handleChange}
                  required
                  placeholder="@username"
                  className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaPhone className="mr-2 text-gray-500" /> Validated Phone Number
              </label>
              <input
                type="text"
                name="validedPhonenumber"
                value={formData.validedPhonenumber}
                onChange={handleChange}
                required
                placeholder="+254 700 000000"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaFileAlt className="mr-2 text-gray-500" /> Upload Resume
              </label>
              <div className="flex items-center mt-1">
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                  required
                  className="w-full p-2 border border-gray-300 rounded pl-8"
                />
              </div>
              {uploadStatus && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 flex items-center">
                    <FaInfoCircle className="mr-1" /> {uploadStatus}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Please wait until the upload is complete before submitting.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Professional Information Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-blue-500" /> Professional Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-medium flex items-center">
                <FaBriefcase className="mr-2 text-gray-500" /> Applied Jobs
              </label>
              <input
                type="text"
                name="appliedJobs"
                value={formData.appliedJobs}
                onChange={handleChange}
                required
                placeholder="e.g. Customer Support, Sales Agent"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaMoneyBillWave className="mr-2 text-gray-500" /> Salary Expectation
              </label>
              <input
                type="number"
                name="salaryExpectation"
                value={formData.salaryExpectation}
                onChange={handleChange}
                required
                placeholder="Expected salary in USD"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaChartLine className="mr-2 text-gray-500" /> Experience Level
              </label>
              <input
                type="text"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                required
                placeholder="e.g. 2 years in customer service"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="casinoExperience"
                  checked={formData.casinoExperience}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="font-medium flex items-center">
                  <FaCheck className="mr-2 text-green-500" /> Casino Experience
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="strokeIgaming"
                  checked={formData.strokeIgaming}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="font-medium flex items-center">
                  <FaCheck className="mr-2 text-green-500" /> Stroke iGaming
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaBuilding className="mr-2 text-gray-500" /> Previous Company
              </label>
              <input
                type="text"
                name="previousCompany"
                value={formData.previousCompany}
                onChange={handleChange}
                required
                placeholder="Company name"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaTrophy className="mr-2 text-gray-500" /> Previous Achievements
              </label>
              <textarea
                name="previousAchievements"
                value={formData.previousAchievements}
                onChange={handleChange}
                required
                placeholder="Describe your professional achievements"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8 h-24"
              ></textarea>
            </div>

            <div>
              <label className="block font-medium flex items-center">
                <FaCalendarAlt className="mr-2 text-gray-500" /> Availability
              </label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                placeholder="e.g. Full-time, Monday-Friday"
                className="w-full p-2 border border-gray-300 rounded mt-1 pl-8"
              />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <label className="text-sm text-gray-600">
                  I agree to the terms and conditions and confirm that all information provided is accurate.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={uploadStatus !== "Upload complete!" && formData.uploadResume === ""}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {
            isSubmiting ? (
              <span className="flex items-center">
                <FaFileUpload className="animate-spin mr-2" /> Submitting...
              </span>
            ) : (
              <span>Submit Application</span>
            )
          }
        </button>
      </div>
    </div>
  );
};

export default JobApplicationForm;