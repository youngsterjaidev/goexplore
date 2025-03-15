// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-center text-blue-400 mb-6">
          About GoExplore
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          We’re passionate about making travel unforgettable. Let us guide you
          on your next adventure!
        </p>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              GoExplore is a team of travel enthusiasts dedicated to creating
              unique and personalized travel experiences. Whether you're looking
              for a relaxing beach getaway, an adventurous trek, or a cultural
              exploration, we’ve got you covered.
            </p>
            <a
              href="/packages"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Explore Our Packages
            </a>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Travel Adventure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-center">
            Our mission is to make travel accessible, enjoyable, and
            unforgettable. We believe that every journey should be an adventure,
            and we're here to help you explore the world with ease and
            confidence.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150" // Replace with team member photo
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">John Doe</h3>
              <p className="text-gray-600">Travel Expert</p>
              <p className="text-gray-500 text-sm mt-2">
                John has over 10 years of experience in the travel industry and
                loves helping people discover new destinations.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150" // Replace with team member photo
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">
                Jane Smith
              </h3>
              <p className="text-gray-600">Customer Support</p>
              <p className="text-gray-500 text-sm mt-2">
                Jane ensures every customer has a seamless experience from
                booking to travel.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150" // Replace with team member photo
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">
                Mike Johnson
              </h3>
              <p className="text-gray-600">Adventure Guide</p>
              <p className="text-gray-500 text-sm mt-2">
                Mike is an experienced guide who loves leading adventurous treks
                and tours.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Ready to Explore?
          </h2>
          <p className="text-gray-600 mb-6">
            Start your journey with GoExplore today. Browse our packages and
            book your next adventure!
          </p>
          <a
            href="/packages"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Packages
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
