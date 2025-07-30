import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">About Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Welcome to <span className="font-semibold">MyStore</span>, your one-stop destination for everything from fashion to electronics.
        We're passionate about bringing you the best products at the best prices, all while offering a seamless and enjoyable shopping experience.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Our team is dedicated to curating top-quality items and delivering outstanding customer service. Whether you're shopping for the latest tech, stylish clothing, or household essentials — we've got you covered.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Thank you for being part of our journey. We're excited to serve you today and in the future!
      </p>
    </div>
  );
};

export default About;
