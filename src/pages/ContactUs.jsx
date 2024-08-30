import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    question: '',
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
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#007791]">Contact Us</h1>
          <p className="text-gray-600 mt-2">Get in touch with us for drone maintenance, pilot training, consultancy services, and more.</p>
        </header>

        {/* Main Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-[#007791] mb-4">Send Us a Message</h2>
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

                  <div>
                    <label htmlFor="question" className="block text-gray-700">How can we assist you?</label>
                    <select
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select a question</option>
                      <option value="generalInquiry">General Inquiry</option>
                      <option value="technicalSupport">Technical Support</option>
                      <option value="pricing">Pricing</option>
                      <option value="other">Other</option>
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

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-[#007791] mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#007791]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <span className="ml-4">123 Drone St, Sky City, SC 12345</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#007791]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <span className="ml-4">+1 (234) 567-8901</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#007791]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <span className="ml-4">info@calldrone.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-[#007791] mb-4">Find Us on the Map</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.980467354476!2d-122.4194186846819!3d37.77492927975859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808fc03a7a07%3A0x56b38f283826ce77!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1623307411206!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
