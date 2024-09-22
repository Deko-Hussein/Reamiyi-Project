import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    alert('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div className="p-6 mx-[28%] my-20  bg-lime-600  rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded w-full p-2"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-white text-black rounded w-full p-2">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
