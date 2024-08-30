import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-[#007791] mb-6">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="droneMaintenance">Drone Maintenance</option>
                  <option value="pilotTraining">Pilot Training</option>
                  <option value="consultancy">Consultancy Services</option>
                </select>
              </div>

              <div className="col-span-2">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="col-span-2 flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="subscribe" className="text-gray-700">Subscribe to our newsletter</label>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#007791] text-white font-semibold rounded-lg hover:bg-[#005f6f] transition duration-300"
              >
                Send
              </button>
            </div>

            {submitted && (
              <div className="mt-4 text-center text-green-600">
                <p>Your message has been successfully delivered!</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
