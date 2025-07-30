import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow-md rounded-lg p-6">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 p-2 rounded mt-1"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
