import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }

        .program-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .program-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="min-h-screen mt-16 bg-gray-100 text-gray-800">
        {/* Header Section */}
        <header className="relative w-full h-[50vh] flex flex-col justify-center items-center bg-[#007791] text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in-down">
            Drone Training & Certification
          </h1>
          <p className="text-lg lg:text-xl animate-fade-in-up">
            Elevate your skills in the world of drones.
          </p>
        </header>

        {/* Redesigned Training Information Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-100">
          <h2 className="text-center text-3xl lg:text-5xl font-semibold text-[#007791] mb-12 animate-slide-in">
            Explore Our Training Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-24">
            {/* Program 1 */}
            <div className="program-card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <img
                src="https://example.com/drone-basics.jpg"
                alt="Drone Basics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#007791] mb-2">Drone Basics</h3>
              <p className="text-gray-600">
                Learn the fundamentals of drone operation, including flight techniques and safety protocols.
              </p>
            </div>

            {/* Program 2 */}
            <div className="program-card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <img
                src="https://example.com/advanced-flight.jpg"
                alt="Advanced Flight Techniques"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#007791] mb-2">Advanced Flight Techniques</h3>
              <p className="text-gray-600">
                Master advanced flight maneuvers and gain proficiency in controlling complex drone systems.
              </p>
            </div>

            {/* Program 3 */}
            <div className="program-card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <img
                src="https://example.com/drone-maintenance.jpg"
                alt="Drone Maintenance"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#007791] mb-2">Drone Maintenance</h3>
              <p className="text-gray-600">
                Understand the essential maintenance tasks to keep your drone in top condition.
              </p>
            </div>

            {/* Program 4 */}
            <div className="program-card bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <img
                src="https://example.com/aerial-photography.jpg"
                alt="Aerial Photography"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#007791] mb-2">Aerial Photography</h3>
              <p className="text-gray-600">
                Learn techniques for capturing stunning aerial photographs and videos.
              </p>
            </div>
          </div>

          <p className="text-center text-lg mt-12 px-8 leading-relaxed text-gray-700 animate-fade-in">
            Whether you're just starting out or looking to enhance your skills, our training programs are designed to help you excel in the field of drone technology.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-[#007791] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#005f6a] to-[#007791] opacity-80"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-6">
              Ready to begin your training journey? Reach out to us to learn more and schedule your training session.
            </p>
            <Link
              to="/ContactUs"
              className="inline-block bg-white text-[#007791] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-200 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;
