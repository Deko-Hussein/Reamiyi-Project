import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Admin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    farmType: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
    alert('Sign-up successful! Welcome to the farming community.');
    setIsSubmitted(true); 
    setFormData({ name: '', email: '', password: '', farmType: '' });
  };

  if (isSubmitted) {
    return <Navigate to="/AdminDashboar" />;
  }

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-2xl font-semibold text-center">Sign Up for Farming</h2>
      <form onSubmit={handleSubmit} className="mt-4">
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
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Type of Farm</label>
          <input
            type="text"
            name="farmType"
            value={formData.farmType}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="e.g., vegetable, livestock"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded w-full p-2">
          Admin
        </button>
      </form>
    </div>
  );
}

export default Admin;
