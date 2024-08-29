import Drone1 from '../assets/Drone-img/Drone1.jpg';
import Drone2 from '../assets/Drone-img/Drone2.jpg';
import Drone3 from '../assets/Drone-img/Drone3.jpg';
import Drone4 from '../assets/Drone-img/Drone4.jpg';
import Drone5 from '../assets/Drone-img/Drone5.jpg';


const drones = [
  {
    name: 'DJI Mavic Air 2',
    image: Drone1,
    description: 'Expertly maintained DJI Mavic Air 2, with personalized training on advanced features and ongoing support to ensure optimal performance.',
    price: '$999',
  },
  {
    name: 'DJI Mini 2',
    image: Drone2,
    description: 'Well-maintained DJI Mini 2, perfect for everyday use. Includes expert guidance on operation and maintenance for a smooth and reliable experience.',
    price: '$499',
  },
  {
    name: 'Autel EVO Lite+',
    image: Drone3,
    description: 'High-performance Autel EVO Lite+, maintained to the highest standards. Comes with detailed tutorials on usage and maintenance to enhance its capabilities.',
    price: '$1499',
  },
  {
    name: 'Skydio 2',
    image: Drone4,
    description: 'Lightweight Skydio 2, expertly serviced and supported. Enjoy comprehensive training on its smart flight modes and maintenance to ensure top performance.',
    price: '$699',
  },
  {
    name: 'DJI Phantom 4 Pro V2.0',
    image: Drone5,
    description: 'Precision-engineered DJI Phantom 4 Pro V2.0 with high-resolution optical zoom. Includes personalized training sessions for effective operation and maintenance.',
    price: '$1199',
  },
  {
    name: 'Hubsan Zino Pro Plus',
    image: Drone1,
    description: 'Speedy Hubsan Zino Pro Plus, maintained with care. Comes with expert tutorials on its use and upkeep to ensure high performance and reliability.',
    price: '$799',
  },
  {
    name: 'DJI Air 2S',
    image: Drone3,
    description: 'Durable DJI Air 2S, with extended range and thorough maintenance. Includes in-depth training on its features and maintenance for extensive operations.',
    price: '$899',
  },
  {
    name: 'Parrot Anafi',
    image: Drone4,
    description: 'Foldable Parrot Anafi, maintained for optimal convenience. Enjoy our expert training on operation and maintenance to maximize its potential.',
    price: '$549',
  },
];


const sectionStyle = {
  backgroundColor: '  #097C7C ', 
  color: '#FFFFFF', 
  paddingTop: '6rem', // Equivalent to py-24
  paddingBottom: '6rem', // Equivalent to py-24
};

const cardStyle = {
  width: '100%',
  maxWidth: 'none', // Remove max-width restriction
  textAlign: 'center',
};

const fadeInKeyframes = `
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .slide-in {
    display: inline-block;
    opacity: 0;
    animation: slideIn 1.5s ease-in-out forwards;
    margin-right: 0.5rem; /* Adjust spacing between words */
  }
`;

const words = [
  'Unleash', 'the', 'Future', 'with', 'Dr.', 'Drone',
];

const LandingPage = () => {
  return (
    <div className=''>
      {/* Hero Section */}
      <section className="w-full bg-[#097C7C]" style={{ ...sectionStyle, padding: '160px 0' }}>
  <style>
    {fadeInKeyframes}
  </style>
  <div className="flex flex-col items-center px-6 lg:px-16">
    <div style={cardStyle} className="w-full max-w-none">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center text-white">
        {words.map((word, index) => (
          <span
            key={index}
            className="slide-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {word}
          </span>
        ))}
      </h1>
      <p className="mt-6 text-lg lg:text-xl text-gray-300 text-center">
        Welcome to Dr. Drone Ltd, your trusted partner in the skies!
      </p>
      <div className="mt-8 text-center">
      <a href="/profile" className="inline-block">
  <button
    className="bg-black hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
  >
    Learn More
  </button>
</a>

      </div>
    </div>
  </div>
</section>





      {/* Features Section */}
      <section className="py-16 pl-4 pr-4">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12">Why Choose Dr. Drone Nig Ltd</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M14 2H6a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1zM6 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H6z" /></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Comprehensive Drone Maintenance</h3>
        <p className="text-gray-600">
          Ensure the optimal performance of your UAV fleet with our thorough and reliable maintenance services.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1a9 9 0 00-9 9v4.6l-1.3 1.3a1 1 0 001.4 1.4L2 15.4V14a7 7 0 117 7h.6l1.3 1.3a1 1 0 001.4-1.4L14 20.6V19a9 9 0 00-9-9z" /></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Innovative Drone Procurement</h3>
        <p className="text-gray-600">
          Access the latest in drone technology and equipment with our specialized procurement services.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" /></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Seamless Drone Integration</h3>
        <p className="text-gray-600">
          Benefit from smooth and efficient integration of drones into your operations with our expert support.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 5a3 3 0 00-3 3v1a3 3 0 003 3 3 3 0 003-3V8a3 3 0 00-3-3zM5 8a5 5 0 015-5 5 5 0 015 5v1a5 5 0 01-5 5 5 5 0 01-5-5V8z" /></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Precision and Reliability</h3>
        <p className="text-gray-600">
          Trust in our dedication to ensuring precise, reliable, and efficient operation of your UAVs.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Drone Models Section */}
      <section className="py-16 pl-4 pr-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Explore Our Drone Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {drones.map((drone, index) => (
              <div key={index} className="bg-white text-[#097C7C] shadow-lg rounded-lg overflow-hidden">
                <img src={drone.image} alt={drone.name} className="w-full  h-64 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{drone.name}</h3>
                  <p className="text-gray-600 mb-4 text-[#097C7C]">{drone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100 pl-4 pr-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-8">About Dr Drone</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
          Welcome to Dr. Drone Nig Ltd, your trusted partner in the skies. As a premier drone maintenance and Procurement company in Nigeria, we take pride in our commitment to excellence, innovation, and reliability. Dr. Drone Nig Ltd is here to redefine the standards of drone care, providing comprehensive solutions to keep your UAV fleet soaring with unparalleled efficiency.
Mission Statement: At Dr. Drone Nig Ltd, our mission is to elevate the performance of your drones to new heights. We are dedicated to ensuring precision, reliability, and the seamless operation of your unmanned aerial vehicles (UAVs), empowering businesses and individuals to reach their full aerial potential.

          </p>
          <button
  className="bg-red-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-full transition duration-300"
>
  Learn More
</button>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 pl-4 pr-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-[#097C7C] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "The Dr Drone Pro has exceeded all my expectations. The 4K camera quality and flight stability are phenomenal!"
              </blockquote>
              <cite className="font-semibold text-white">John Doe</cite>
            </div>
            <div className="bg-[#097C7C] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "I love the ease of use and the advanced features. DroneX is definitely worth every penny!"
              </blockquote>
              <cite className="font-semibold text-white">Jane Smith</cite>
            </div>
            <div className="bg-[#097C7C] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "From setup to flight, everything has been smooth and enjoyable. The DroneX Max is a game-changer!"
              </blockquote>
              <cite className="font-semibold text-white">Alice Johnson</cite>
            </div>
            <div className="bg-[#097C7C] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "The Dr Drone Air is perfect for my needs. Its compact size and advanced features are just what I was looking for."
              </blockquote>
              <cite className="font-semibold text-white">Robert Lee</cite>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
