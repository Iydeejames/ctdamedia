import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    emailjs.sendForm(
      'service_8ydryxn',        // Service ID
      'template_jiae8jr',       // Template ID
      e.target,                 // The form
      'P9eIxcX-REViB7axt'      // User ID (Public Key)
    )
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          question: '',
          message: '',
          subscribe: false,
        });
        setSubmitted(false);
      }, (error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
        setSubmitted(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#007791] py-12 px-6 mt-16 sm:px-12">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-md lg:text-5xl text-white">Contact Us</h1>
          <p className="text-gray-200 lg:text-xl text-xs mt-4">We would love to hear from you! Let us know how we can assist you.</p>
        </header>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Drop Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-[#007791] focus:border-[#007791]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-[#007791] focus:border-[#007791]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-600 font-medium">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-[#007791] focus:border-[#007791]"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-600 font-medium">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-[#007791] focus:border-[#007791]"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="droneMaintenance">Drone Maintenance</option>
                      <option value="pilotTraining">Pilot Training</option>
                      <option value="consultancy">Consultancy Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="question" className="block text-gray-600 font-medium">How can we assist you?</label>
                    <select
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-[#007791] focus:border-[#007791]"
                    >
                      <option value="" disabled>Select a question</option>
                      <option value="generalInquiry">General Inquiry</option>
                      <option value="technicalSupport">Technical Support</option>
                      <option value="pricing">Pricing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-600 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-[#007791] focus:border-[#007791]"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="subscribe" className="text-gray-600">Subscribe to our newsletter</label>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#007791] text-white font-semibold rounded-lg hover:bg-[#005f6f] transition duration-300"
                  >
                    Send Message
                  </button>
                </div>

                {submitted && (
                  <div className="mt-4 text-center text-green-600">
                   
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-[#f3f4f6] p-6 rounded-lg shadow-inner">
              <p className="text-sm lg:text-3xl font-bold text-gray-800 mb-6">Get in Touch</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#007791]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <span className="ml-4">3 Emmanuel Bassey Avenue, Uyo, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#007791]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <span className="ml-4">+2349080006600 +2347033805523</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#007791]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  <span className="ml-4">info@drdrone.ng</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 relative">
          <figcaption className="mt-2 text-center font-bold m-4 text-black text-xl lg:text-3xl">Our Location</figcaption>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.537366710295!2d7.885353615891919!3d5.040861696289244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a1f8cfa15a3af%3A0x1cf41939cbd8c27f!2s3%20Emmanuel%20Bassey%20Avenue%2C%20Uyo%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1692125829776!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
