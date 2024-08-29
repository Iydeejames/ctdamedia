import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#097C7C] to-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="bg-[#097C7C] text-white py-6 px-8 rounded-t-lg">
          <h1 className="text-4xl font-bold">Dr. Drone Nig Ltd</h1>
          <p className="text-xl mt-2">Elevating Performance, Ensuring Precision</p>
        </header>
        
        {/* Content Section */}
        <main className="p-8 bg-white shadow-lg rounded-lg">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#097C7C]">Introduction</h2>
            <p className="text-gray-800 leading-relaxed">
              Welcome to Dr. Drone Nig Ltd, your trusted partner in the skies. As a premier drone maintenance and Procurement company in Nigeria, we take pride in our commitment to excellence, innovation, and reliability. Dr. Drone Nig Ltd is here to redefine the standards of drone care, providing comprehensive solutions to keep your UAV fleet soaring with unparalleled efficiency.
            </p>
          </section>
          
          {/* Mission Statement */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#097C7C]">Mission Statement</h2>
            <p className="text-gray-800 leading-relaxed">
              At Dr. Drone Nig Ltd, our mission is to elevate the performance of your drones to new heights. We are dedicated to ensuring precision, reliability, and the seamless operation of your unmanned aerial vehicles (UAVs), empowering businesses and individuals to reach their full aerial potential.
            </p>
          </section>

          {/* Key Services */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#097C7C]">Key Services</h2>
            <ul className="space-y-6 text-gray-800">
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Comprehensive Maintenance Programs:</h3>
                <p>We offer tailor-made maintenance programs designed to keep your drone fleet in optimal condition. Our proactive approach includes regular check-ups, diagnostics, and preventive measures, ensuring that potential issues are identified and addressed before they become critical.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Emergency Repairs and Rapid Response:</h3>
                <p>In the unpredictable world of drone operations, we understand the urgency of unexpected breakdowns. Our dedicated team of certified technicians is on standby 24/7 to provide swift and efficient emergency repairs, minimizing downtime and maximizing productivity.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Advanced Diagnostics and Upgrades:</h3>
                <p>Stay ahead of the curve with our state-of-the-art diagnostic tools and upgrade services. We analyze your drone's performance metrics, recommend improvements, and implement upgrades to keep your fleet equipped with the latest technology and capabilities.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Training and Consultation:</h3>
                <p>Dr. Drone Nig. Ltd goes beyond maintenance; we empower your team with specialized training programs on drone care and handling. Our experts provide consultations to help you optimize your drone operations, ensuring you get the most out of your investment.</p>
              </li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#097C7C]">Why Choose Dr. Drone Nig Ltd</h2>
            <ul className="space-y-6 text-gray-800">
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Expertise and Innovation:</h3>
                <p>Our team consists of seasoned professionals with extensive experience in drone technology. We stay ahead of the curve, incorporating the latest innovations and best practices into our maintenance protocols.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Customized Solutions:</h3>
                <p>We understand that one size does not fit all. Dr. Drone Nig Ltd offers flexible and customized maintenance packages tailored to suit the diverse needs of different industries, applications, and fleet sizes.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Trust and Reliability:</h3>
                <p>Building trust is at the core of our operations. Dr. Drone Nig Ltd is synonymous with reliability, transparency, and unwavering commitment to customer satisfaction, earning the trust of leading companies across various sectors.</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#097C7C]">Environmental Stewardship:</h3>
                <p>Committed to sustainability, Dr. Drone Nig Ltd integrates eco-friendly solutions into our maintenance processes, ensuring responsible and ethical drone care practices.</p>
              </li>
            </ul>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-[#097C7C]">Contact Us</h2>
            <p className="text-gray-800 mb-4">
              Elevate your drone operations with precision and reliability. For inquiries, maintenance plans, or emergency services, contact Dr. Drone Nig Ltd at:
            </p>
            <ul className="list-none space-y-2 text-gray-800">
              <li>
                <span className="font-semibold text-[#097C7C]">Email:</span> <a href="mailto:drdronenigltd@gmail.com" className="hover:underline">drdronenigltd@gmail.com</a>
              </li>
              <li>
                <span className="font-semibold text-[#097C7C]">Phone:</span> 09080006600, 07033805523
              </li>
              <li>
                <span className="font-semibold text-[#097C7C]">Website:</span> <a href="#" className="text-[#097C7C] hover:underline">Dr. Drone Nig Ltd - Elevating Drones, Elevating Expectations</a>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;
