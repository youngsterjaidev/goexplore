// src/components/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Let's Talk!
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          We're here to help you plan your next adventure. Reach out to us
          anytime!
        </p>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="johndoe@example.com"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your dream trip..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Additional Engagement Elements */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Prefer Another Way to Reach Us?
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:info@goexplore.com"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              ✉️ Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition duration-300"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
