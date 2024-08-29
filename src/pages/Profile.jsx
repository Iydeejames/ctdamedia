
const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#007791] to-white p-6 mt-16">
      <header className="text-white py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Dr. Drone Nig Ltd</h1>
          <p className="text-xl mt-2">Elevating Performance, Ensuring Precision</p>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto py-12 px-6 rounded-lg shadow-md">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Introduction</h2>
          <p className="text-white">
            Welcome to Dr. Drone Nig Ltd, your trusted partner in the skies. As a premier drone maintenance and procurement company in Nigeria, we take pride in our commitment to excellence, innovation, and reliability. Dr. Drone Nig Ltd is here to redefine the standards of drone care, providing comprehensive solutions to keep your UAV fleet soaring with unparalleled efficiency.
          </p>
        </section>
        
        {/* Mission Statement */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Mission Statement</h2>
          <p className="text-white">
            At Dr. Drone Nig Ltd, our mission is to elevate the performance of your drones to new heights. We are dedicated to ensuring precision, reliability, and the seamless operation of your unmanned aerial vehicles (UAVs), empowering businesses and individuals to reach their full aerial potential.
          </p>
        </section>

        {/* Key Services */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Key Services</h2>
          <ul className="list-disc list-inside space-y-4 text-white">
            <li>
              <h3 className="font-semibold">Comprehensive Maintenance Programs:</h3>
              <p>We offer tailor-made maintenance programs designed to keep your drone fleet in optimal condition. Our proactive approach includes regular check-ups, diagnostics, and preventive measures, ensuring that potential issues are identified and addressed before they become critical.</p>
            </li>
            <li>
              <h3 className="font-semibold">Emergency Repairs and Rapid Response:</h3>
              <p>In the unpredictable world of drone operations, we understand the urgency of unexpected breakdowns. Our dedicated team of certified technicians is on standby 24/7 to provide swift and efficient emergency repairs, minimizing downtime and maximizing productivity.</p>
            </li>
            <li>
              <h3 className="font-semibold">Advanced Diagnostics and Upgrades:</h3>
              <p>Stay ahead of the curve with our state-of-the-art diagnostic tools and upgrade services. We analyze your drones performance metrics, recommend improvements, and implement upgrades to keep your fleet equipped with the latest technology and capabilities.</p>
            </li>
            <li>
              <h3 className="font-semibold">Training and Consultation:</h3>
              <p>Dr. Drone Nig. Ltd goes beyond maintenance; we empower your team with specialized training programs on drone care and handling. Our experts provide consultations to help you optimize your drone operations, ensuring you get the most out of your investment.</p>
            </li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Why Choose Dr. Drone Nig Ltd</h2>
          <ul className="list-disc list-inside space-y-4 text-white">
            <li>
              <h3 className="font-semibold">Expertise and Innovation:</h3>
              <p>Our team consists of seasoned professionals with extensive experience in drone technology. We stay ahead of the curve, incorporating the latest innovations and best practices into our maintenance protocols.</p>
            </li>
            <li>
              <h3 className="font-semibold">Customized Solutions:</h3>
              <p>We understand that one size does not fit all. Dr. Drone Nig Ltd offers flexible and customized maintenance packages tailored to suit the diverse needs of different industries, applications, and fleet sizes.</p>
            </li>
            <li>
              <h3 className="font-semibold">Trust and Reliability:</h3>
              <p>Building trust is at the core of our operations. Dr. Drone Nig Ltd is synonymous with reliability, transparency, and unwavering commitment to customer satisfaction, earning the trust of leading companies across various sectors.</p>
            </li>
            <li>
              <h3 className="font-semibold">Environmental Stewardship:</h3>
              <p>Committed to sustainability, Dr. Drone Nig Ltd integrates eco-friendly solutions into our maintenance processes, ensuring responsible and ethical drone care practices.</p>
            </li>
          </ul>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-white">Contact Us</h2>
          <p className="text-white mb-4">
            Elevate your drone operations with precision and reliability. For inquiries, maintenance plans, or emergency services, contact Dr. Drone Nig Ltd at:
          </p>
          <ul className="list-none space-y-2 text-white">
            <li>
              <span className="font-semibold">Email:</span> drdronenigltd@gmail.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> 09080006600, 07033805523
            </li>
            <li>
              <span className="font-semibold">Website:</span> <a href="#" className="text-[#007791] hover:underline">Dr. Drone Nig Ltd - Elevating Drones, Elevating Expectations</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Profile;
