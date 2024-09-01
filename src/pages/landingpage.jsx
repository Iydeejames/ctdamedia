import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Drone2 from '../assets/Drone-img/Drone2.jpg';
import Drone3 from '../assets/Drone-img/Drone3.jpg';
import Drone4 from '../assets/Drone-img/Drone4.jpg';
import Drone5 from '../assets/Drone-img/Drone5.jpg';
import Drone6 from '../assets/Drone-img/Drone6.jpg';
import Drone7 from '../assets/Drone-img/Drone7.jpg';
import Drone8 from '../assets/Drone-img/Drone8.jpg';
import Drone9 from '../assets/Drone-img/Drone9.jpg';
import Drone11 from '../assets/Drone-img/Drone11.jpg';
import Drone18 from '../assets/Drone-img/Drone18.jpg';

const drones = [
  {
    name: 'DJI M350 RTK',
    image: Drone7,
    description: 'The DJI Matrice 350 RTK is built to handle demanding professional missions in harsh environments. With 03 enterprice transmission uses a four-antenna system for control and live data feeds up to 12.4 miles away. The motor of the drone is capable of horizontal speeds up to 52mph',
    price: '$999',
  },
  {
    name: 'WingtraOne',
    image: Drone2,
    description: 'The WingtraOne mapping drone’s unique set of features empowers you to minimize your time flying and get more work done. Fly at 16 m/s (36 mph) for up to 59 minutes per flight for large coverage, with 61 MP WingtraOne can fly higher than drones limited to 20 MP cameras.',
    price: '$499',
  },
  {
    name: 'Deltaquad Evo',
    image: Drone3,
    description: 'DeltaQuad’s Evo, offers advanced features and exceptional performance. With over 4 hours of flight time, up to 270 km range, dual payload bays, and high-quality composites, it provides versatility and superior functionality.',
    price: '$1499',
  },
  {
    name: 'Autel Dragonfish Pro',
    image: Drone4,
    description: 'The Dragonfishs unique tilt-rotor design simplifies operation while maximizing performance and efficiency. With no complicated moving parts, the Dragonfish is modular, waterproof, smart, and reliable. With 158 minutes Longest flight time with load.',
    price: '$699',
  },
  {
    name: 'DJI Mavic 3 Multispectral',
    image: Drone5,
    description: 'The Mavic 3M is ideal for many industries including agriculture, surveying, and inspection. In agriculture, multispectral cameras are essential for judging accurate vegetation and crop health.',
    price: '$1199',
  },
  {
    name: 'DJI Agras T50',
    image: Drone6,
    description: 'DJI AGRAS T50 elevates drone agricultural operations to new heights. It inherits a powerful coaxial twin-rotor propulsion system and a split-type torque resistant structure for next level stability when carrying 40 kg',
    price: '$799',
  },
  {
    name: 'DJI FlyCart 30 Delivery Drone',
    image: Drone18,
    description: 'The DJI FlyCart 30 is a delivery drone with large payload capacity, long operation range, and intelligent features. It supports two modes of transportation: Cargo mode and Winch mode Carry up to 30kg and cover up to 16km with a full payload.',
    price: '$899',
  },
  {
    name: 'SwellPro Fisherman MAX (FD2) Heavy Lift Fishing Drone',
    image: Drone8,
    description: 'This is Fisherman Max. The newest member in SwellPro drone fishing fleet, and the most powerful one. It’s the fishing drone that anglers all over the world have been waiting for 7.7 LBS / 3.5 KG Bait Capacity: Live video feed for Increasing bait cast accuracy without using a phone.1 MILE / 1.5 KM Casting Range.',
    price: '$549',
  },
];


const cardStyle = {
  width: '100%',
  maxWidth: 'none',
  textAlign: 'center',
};

const words = [
  'Unleash', 'the', 'Future', 'with', 'Dr.', 'Drone',
];

const ImageSliderSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Drone9, Drone11];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const sliderSectionStyle = {
    position: 'relative',
    padding: '220px 0',
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden', // Prevent any overflow from showing
    transition: 'background-image 0.4s ease-in-out', // Faster transition
  };

  const slidingImageStyle = {
    position: 'absolute',
    top: 0,
    left: '100%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'left 0.4s ease-in-out', // Faster transition
  };

  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  return (
    <section style={sliderSectionStyle}>
      <style>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <div style={overlayStyle}></div>
      <div style={slidingImageStyle}></div>
      <div className="flex flex-col items-center px-6 lg:px-16 relative z-10">
        <div style={cardStyle} className="w-full max-w-none">
          <h1 className="text-3xl lg:text-6xl mt-16 font-bold leading-tight text-center text-white">
            {words.map((word, index) => (
              <span
                key={index}
                className="slide-in inline-block mx-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white text-center">
            Welcome to Dr. Drone Ltd, your trusted partner in the skies!
          </p>
          <div className="mt-8 text-center">
            <a href="/profile" className="inline-block">
              <button className="bg-red-600 hover:bg-white text-white hover:text-red-600 font-semibold py-3 px-6 rounded-full transition duration-300">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className=''>
      <ImageSliderSection />

      {/* Features Section */}
      <section className="py-16 pl-4 pr-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Dr. Drone Nig Ltd</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Comprehensive Drone Maintenance */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-tools text-red-500 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Drone Maintenance/Repairs</h3>
              <p className="text-gray-600">
                Ensure the optimal performance of your UAV fleet with our thorough and reliable maintenance services.
              </p>
            </div>
            
            {/* Innovative Drone Procurement */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-box text-red-500 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Procurement Services</h3>
              <p className="text-gray-600">
                Access the latest in drone technology and equipment with our specialized procurement services.
              </p>
            </div>
            
            {/* Seamless Drone Integration */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-network-wired text-red-500 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Consultancy Services</h3>
              <p className="text-gray-600">
                At Dr. Drone, we offer our professional services to help you make informed and innovative UAV related decisions.
              </p>
            </div>
            
      
      {/* Pilot Training */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <i className="fas fa-graduation-cap text-red-500 text-4xl"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Pilot Training Program</h3>
        <p className="text-gray-600">
          Take flight with our expert Pilot Training program. Join us today to begin your journey to the skies!
        </p>
      </div>
      
    </div>
  </div>
</section>



      {/* Drone Models Section */}
      <section className="py-16 pl-4 pr-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Explore Our Drone Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {drones.map((drone, index) => (
              <div key={index} className="bg-white text-[#000000]] shadow-lg rounded-lg overflow-hidden">
                <img src={drone.image} alt={drone.name} className="w-full  h-64 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{drone.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm text-[#000000]">{drone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100 pl-4 pr-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-8">About Dr. Drone</h2>
          <p className="text-md mb-8 max-w-2xl mx-auto">
  Welcome to Dr. Drone Nig Ltd, your trusted partner in the skies. As a premier drone maintenance and procurement company in Nigeria, we take pride in our commitment to excellence, innovation, and reliability. Dr. Drone Nig Ltd is here to redefine the standards of drone care, providing comprehensive solutions to keep your UAV fleet soaring with unparalleled efficiency.
  <br /><br />
  <span className="font-semibold block">Mission Statement:</span>
  At Dr. Drone Nig Ltd, our mission is to elevate the performance of your drones to new heights. We are dedicated to ensuring precision, reliability, and the seamless operation of your unmanned aerial vehicles (UAVs), empowering businesses and individuals to reach their full aerial potential.
</p>

       {/*   <Link to="/certification">
  <button
    className="bg-red-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-full transition duration-300"
  >
    Learn More
  </button>
</Link> */}

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 pl-4 pr-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-[#007791] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "I needed someone reliable to fix my gimbal after previous worst experience. I google search and Dr Drone was suggested by Google. I contacted him and I must confess the service and swift response was top notch. My gimbal works perfectly after the fix it."
              </blockquote>
              <cite className="font-semibold text-white">Omosanjo Adebowale</cite>
            </div>
            <div className="bg-[#007791] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "I’m really happy with their service! My Mini 3 pro crashed which led to the Gimbal being stuck. I sent it to them, they narrowed down the issue and it's fixed. Completely recommend"
              </blockquote>
              <cite className="font-semibold text-white">Ekuma Inieke</cite>
            </div>
            <div className="bg-[#007791] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "This has to count as one of the most pleasant customer experiences I've had this year. Speedy, expert and courteous service in restoring my crashed drone. I can state that they truly lived to their name - Dr Drone.Reasonably priced too."
              </blockquote>
              <cite className="font-semibold text-white">Abdulrehim Umarn</cite>
            </div>
            <div className="bg-[#007791] p-8 rounded-lg shadow-lg">
              <blockquote className="text-white mb-4">
                "He is very good trust me, My drone couldn’t be fixed in my state I had to send it to him and he was transparent about the whole process kudos to him."
              </blockquote>
              <cite className="font-semibold text-white">Chukwuemeka Onah Johnson</cite>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
