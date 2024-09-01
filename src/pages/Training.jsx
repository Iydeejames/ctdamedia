import {  useEffect } from 'react';
import { Link } from 'react-router-dom';

const Training= () => {

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

     return (
          <div className="min-h-screen mt-16 bg-gray-100 text-gray-800 p-8">
            {/* Header Section */}
            <div className=" p-12 rounded-lg text-center ">
              <h1 className="text-xl lg:text-4xl font-bold text-[#007791] ">Drone Training & Certification</h1>
            </div>
      
            {/* Training Information Section */}
            <div className="p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-xl lg:text-4xl font-semibold text-[#007791] mb-6">Explore Our Training Programs</h2>
              <p className="text-gray-700 mb-6">
                Our comprehensive training programs include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-[#007791]">
                  <h3 className="text-xl font-semibold text-[#007791] mb-4">Drone Basics</h3>
                  <p className="text-gray-600">
                    Learn the fundamentals of drone operation, including flight techniques and safety protocols.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-[#007791]">
                  <h3 className="text-xl font-semibold text-[#007791] mb-4">Advanced Flight Techniques</h3>
                  <p className="text-gray-600">
                    Master advanced flight maneuvers and gain proficiency in controlling complex drone systems.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-[#007791]">
                  <h3 className="text-xl font-semibold text-[#007791] mb-4">Drone Maintenance</h3>
                  <p className="text-gray-600">
                    Understand the essential maintenance tasks to keep your drone in top condition.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-[#007791]">
                  <h3 className="text-xl font-semibold text-[#007791] mb-4">Aerial Photography</h3>
                  <p className="text-gray-600">
                    Learn techniques for capturing stunning aerial photographs and videos.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-6">
                Whether you are just starting out or looking to enhance your skills, our training programs are designed to meet your needs and help you excel in the field of drone technology.
              </p>
            </div>
      
            {/* Contact Us Link Section */}
            <div className="bg-[#007791] text-white p-12 rounded-lg shadow-lg text-center">
              <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-lg mb-6">
                Ready to begin your training journey? Reach out to us to learn more and schedule your training session.
              </p>
              <Link
                to="/ContactUs"
                className="bg-white text-[#007791] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        );
      };
      

export default Training;
