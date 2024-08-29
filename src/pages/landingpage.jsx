import Drone1 from '../assets/Drone-img/Drone1.jpg';
import Drone2 from '../assets/Drone-img/Drone2.jpg';
import Drone3 from '../assets/Drone-img/Drone3.jpg';
import Drone4 from '../assets/Drone-img/Drone4.jpg';
import Drone5 from '../assets/Drone-img/Drone5.jpg';


const drones = [
  {
    name: 'Dr Drone Pro',
    image: Drone1,
    description: 'Advanced drone with 4K camera and long flight time.',
    price: '$999',
  },
  {
    name: 'Dr Drone Mini',
    image: Drone2,
    description: 'Compact and portable drone for everyday use.',
    price: '$499',
  },
  {
    name: 'Dr Drone Max',
    image: Drone3,
    description: 'High-end drone with enhanced features and extra battery.',
    price: '$1499',
  },
  {
    name: 'Dr Drone Air',
    image: Drone4,
    description: 'Lightweight drone with easy handling and smart flight modes.',
    price: '$699',
  },
  {
    name: 'Dr Drone Zoom',
    image: Drone5,
    description: 'Drone with optical zoom for detailed aerial shots.',
    price: '$1199',
  },
  {
    name: 'Dr Drone Racer',
    image: Drone1,
    description: 'Speedy drone designed for racing enthusiasts.',
    price: '$799',
  },
  {
    name: 'Dr Drone Explore',
    image: Drone3,
    description: 'Durable drone with extended range for exploration.',
    price: '$899',
  },
  {
    name: 'Dr Drone Fold',
    image: Drone4,
    description: 'Foldable drone for easy transport and storage.',
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
    <div >
      {/* Hero Section */}
      <section className="w-full bg-[  #097C7C ] " style={sectionStyle}>
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
      <button
  className="bg-black hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
  style={{
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  }}
>
  Learn More
</button>


      </div>
    </div>
  </div>
</section>




      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Features You'll Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M14 2H6a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1zM6 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H6z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">4K Camera</h3>
              <p className="text-gray-600">
                Capture high-definition aerial footage with our 4K camera, ensuring every detail is crystal clear.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1a9 9 0 00-9 9v4.6l-1.3 1.3a1 1 0 001.4 1.4L2 15.4V14a7 7 0 117 7h.6l1.3 1.3a1 1 0 001.4-1.4L14 20.6V19a9 9 0 00-9-9z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Intelligent Flight Modes</h3>
              <p className="text-gray-600">
                Choose from various flight modes to capture stunning footage with ease and precision.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Easy Setup</h3>
              <p className="text-gray-600">
                Set up your drone effortlessly with our user-friendly interface and intuitive controls.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 5a3 3 0 00-3 3v1a3 3 0 003 3 3 3 0 003-3V8a3 3 0 00-3-3zM5 8a5 5 0 015-5 5 5 0 015 5v1a5 5 0 01-5 5 5 5 0 01-5-5V8z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Advanced GPS</h3>
              <p className="text-gray-600">
                Utilize advanced GPS technology for precise navigation and reliable tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drone Models Section */}
      <section className="py-16">
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-8">About Dr Drone</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
          Welcome to Dr. Drone Nig Ltd, your trusted partner in the skies. As a premier drone maintenance and Procurement company in Nigeria, we take pride in our commitment to excellence, innovation, and reliability. Dr. Drone Nig Ltd is here to redefine the standards of drone care, providing comprehensive solutions to keep your UAV fleet soaring with unparalleled efficiency.
Mission Statement: At Dr. Drone Nig Ltd, our mission is to elevate the performance of your drones to new heights. We are dedicated to ensuring precision, reliability, and the seamless operation of your unmanned aerial vehicles (UAVs), empowering businesses and individuals to reach their full aerial potential.

          </p>
          <button
  className="bg-red-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-md transition duration-300"
  style={{
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  }}
>
  Learn More
</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-gray-600 mb-4">
                "The Dr Drone Pro has exceeded all my expectations. The 4K camera quality and flight stability are phenomenal!"
              </blockquote>
              <cite className="font-semibold">John Doe</cite>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-gray-600 mb-4">
                "I love the ease of use and the advanced features. DroneX is definitely worth every penny!"
              </blockquote>
              <cite className="font-semibold">Jane Smith</cite>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-gray-600 mb-4">
                "From setup to flight, everything has been smooth and enjoyable. The DroneX Max is a game-changer!"
              </blockquote>
              <cite className="font-semibold">Alice Johnson</cite>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-gray-600 mb-4">
                "The Dr Drone Air is perfect for my needs. Its compact size and advanced features are just what I was looking for."
              </blockquote>
              <cite className="font-semibold">Robert Lee</cite>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
