"use client";
import React, { useState } from "react";
import { FaTelegram, FaFileUpload, FaCheck } from "react-icons/fa";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from "../firebase";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    country: "",
    email: "",
    telegramUsername: "",
    appliedJobs: "",
    salaryExpectation: "",
    experienceLevel: "",
    uploadResume: "",
    validatedPhonenumber: "",
    casinoExperience: false,
    strokeIgaming: false,
    previousCompany: "",
    previousAchievements: "",
    availability: "",
  });

  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `resumes/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("File upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevData) => ({
            ...prevData,
            uploadResume: downloadURL,
          }));
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/applicants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          fullname: "",
          country: "",
          email: "",
          telegramUsername: "",
          appliedJobs: "",
          salaryExpectation: "",
          experienceLevel: "",
          uploadResume: "",
          validatedPhonenumber: "",
          casinoExperience: false,
          strokeIgaming: false,
          previousCompany: "",
          previousAchievements: "",
          availability: "",
        });
        setUploadProgress(0);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Telegram Username</label>
          <div className="flex items-center">
            <FaTelegram className="mr-2" />
            <input
              type="text"
              name="telegramUsername"
              value={formData.telegramUsername}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block font-medium">Applied Jobs</label>
          <input
            type="text"
            name="appliedJobs"
            value={formData.appliedJobs}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Salary Expectation</label>
          <input
            type="number"
            name="salaryExpectation"
            value={formData.salaryExpectation}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Experience Level</label>
          <input
            type="text"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Validated Phone Number</label>
          <input
            type="text"
            name="validatedPhonenumber"
            value={formData.validatedPhonenumber}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Casino Experience</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="casinoExperience"
              checked={formData.casinoExperience}
              onChange={handleChange}
              className="mr-2"
            />
            <FaCheck className="text-green-500" />
          </div>
        </div>
        <div>
          <label className="block font-medium">Stroke Igaming</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="strokeIgaming"
              checked={formData.strokeIgaming}
              onChange={handleChange}
              className="mr-2"
            />
            <FaCheck className="text-green-500" />
          </div>
        </div>
        <div>
          <label className="block font-medium">Previous Company</label>
          <input
            type="text"
            name="previousCompany"
            value={formData.previousCompany}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Previous Achievements</label>
          <textarea
            name="previousAchievements"
            value={formData.previousAchievements}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Availability</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Upload Resume</label>
          <div className="flex items-center">
            <FaFileUpload className="mr-2" />
            <input
              type="file"
              onChange={(e) => handleFileUpload(e.target.files[0])}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {uploadProgress > 0 && (
            <div className="mt-2 text-sm text-gray-600">
              Upload Progress: {Math.round(uploadProgress)}%
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;