// src/components/ContactForm.js

import React, { useState } from "react";
import { Taskbar } from "./Taskbar";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Taskbar />

      <div className="h-screen flex items-center justify-center bg-gray-900 text-white mt-[-4rem]">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg  resize-none focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-300 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
