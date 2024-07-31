"use client"; // This directive tells Next.js that this is a Client Component

import { useState } from 'react';

// Contact page component
export default function Contact() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
    // Here you would typically send the form data to your server
    alert('Message sent!');
  };

  return (
    <div className="container mx-auto p-4 fade-in">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      {/* Contact form */}
      <form className="mt-8" onSubmit={handleSubmit}>
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <label className="block mt-4 mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <label className="block mt-4 mb-2">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-textarea"
        />
        <button type="submit" className="form-button">Send</button>
      </form>
    </div>
  );
}
