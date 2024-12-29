/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import ScrollSection from "../components/reusables/ScrollSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";


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
import AboutMainImage from '../assets/Drone-img/Drone7.jpg';
import AboutSecondaryImage from '../assets/Drone-img/Drone9.jpg';


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
    description: 'Fisherman Max is the newest member in SwellPro drone fishing fleet, and the most powerful one. It’s the fishing drone that anglers all over the world have been waiting for 7.7 LBS / 3.5 KG Bait Capacity.',
    price: '$549',
  },
];





const cardStyle = {
  width: '100%',
  maxWidth: 'none',
  textAlign: 'center',
};

const words = [
  //' Fly', 'Confidently', 'with', 'Dr.', 'Drone',   
 // 'Dr.', 'Drone', '–', 'Your', 'Trusted', 'Partner', 'for',  'Professional', 'Solutions!',  
   'Excellence', 'in', 'Drone', 'Solutions', 'with', 'Dr.', 'Drone.' 
];

const ImageSliderSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Drone9, Drone11];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const sliderSectionStyle = {
    position: 'relative',
    padding: '250px 0',
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  };

  return (
<ScrollSection>
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

      @keyframes buttonPulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.8;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `}</style>
    <div style={overlayStyle}></div>
    <div style={slidingImageStyle}></div>
    <div className="flex flex-col items-start px-6 lg:px-16 relative z-10">
      <div style={cardStyle} className="w-full max-w-none">
      <h1 className="text-2xl lg:text-5xl mt-8 font-bold leading-tight text-left text-white">
          {words.map((word, index) => (
            <span
              key={index}
              className="slide-in inline-block mx-1"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                color: 
                  word === 'Drone.' || 
                  word === 'Dr.' || 
                  word === 'Excellence' || 
                  word === 'Drone.' ? '#007791' : 'inherit' // Highlight 'Fly' and 'Dr.' in red as well
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className="mt-6 text-xs lg:text-xl text-white text-left">
  Drone Service Provider || Procurement Services || Reliable Maintenance || Professional Pilot Training
</p>

        <div className="mt-8 text-left">
          <a href="/profile" className="inline-block">
            <button className="bg-[#007791] hover:bg-[#ffffff] text-white hover:text-red-600 font-semibold py-2 px-5 text-sm rounded-md transition duration-300 animate-[buttonPulse_2s_infinite]"
                    style={{
                      clipPath: 'polygon(50% 0%, 81% 5%, 100% 0, 100% 100%, 80% 95%, 50% 100%, 20% 95%, 0 100%, 0 0, 23% 5%)'
                      //clipPath: 'polygon(60% 15%, 23% 15%, 0 10%, 0 90%, 25% 85%, 60% 85%, 70% 100%, 100% 50%, 100% 50%, 70% 0)'
                    }}>
              About Us
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</ScrollSection>





  );
};

const LandingPage = () => {
  return (
    <div className="">
      <ImageSliderSection />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="text-center ">
        <ScrollSection>
          <h2 className="text-xl lg:text-2xl  font-bold mb-2">
            Why Choose Dr. Drone Nig Ltd:
          </h2>
          </ScrollSection>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-4"
            style={{
              scrollBehavior: "smooth",
            }}
          >

              {/* Card 0 */}
              <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faRocket} className="text-3xl text-red-500"/>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
              Drone Service Providers (DSPs) 
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
              We offer specialized services using drones  (UAVs) to meet industry-specific needs. These services leverage drone technology to perform tasks efficiently, safely, and cost-effectively
              </p>
              </ScrollSection>
            </div>

            {/* Card 1 */}
            <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-tools text-red-500 text-3xl"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
                Comprehensive Drone Maintenance/Repairs
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
                Ensure the optimal performance of your UAV fleet with our thorough and reliable maintenance services.
              </p>
              </ScrollSection>
            </div>

            {/* Card 2 */}
            <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-box text-red-500 text-3xl"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
                Procurement Services
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
                Access the latest in drone technology and equipment with our specialized procurement services.
              </p>
              </ScrollSection>
            </div>

            {/* Card 3 */}
            <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-network-wired text-red-500 text-3xl"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
                Consultancy Services
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
                At Dr. Drone, we offer our professional services to help you make informed and innovative UAV-related decisions.
              </p>
              </ScrollSection>
            </div>


            {/* Card 4 */}
            <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-graduation-cap text-red-500 text-3xl"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
                Pilot Training Program
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
                Take flight with our expert Pilot Training program. Join us today to begin your journey to the skies!
              </p>
              </ScrollSection>
            </div>


            {/* Card 6 */}
            <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-tools text-red-500 text-3xl"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
                Expert Team
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
                Our team consists of experienced pilots, engineers, and consultants who are passionate about UAV technology and its transformative potential across industries.
              </p>
              </ScrollSection>
            </div>

            {/* Card 7 */}
            <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-tools text-red-500 text-3xl"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
                Tailored Solutions
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
                We understand that every industry has its unique requirements, and we provide customized drone services that drive real value for our clients.
              </p>
              </ScrollSection>
            </div>

            {/* Card 8 */}
            <div className="bg-white feature-card p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <i className="fas fa-tools text-red-500 text-3xl"></i>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">
                Safety & Compliance
              </h3>
              <ScrollSection>
              <p className="text-gray-600 text-sm">
                We prioritize safety and compliance, ensuring that all our operations meet regulatory standards and industry best practices.
              </p>
              </ScrollSection>
            </div>
          </div>
        </div>
      </section>




 {/* About Section */}
 <section className="container-xxl py-5 bg-[rgb(225,240,242)]">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Text */}
      <div className="flex flex-col justify-center">
      <ScrollSection>
        <h6 className="text-secondary text-[#007791]  text-sm font-bold mb-2">What We Offer At</h6>
        <h1 className="text-2xl lg:text-3xl text-[#007791] font-bold mb-4">
          Dr Drone Nig. Ltd 
        </h1>
        </ScrollSection>
        <ScrollSection>
        <p className="text-gray-700 mb-4">
          We specialize in providing innovative Unmanned Aerial Vehicle (UAV) services that deliver unmatched precision, efficiency, and safety. With a diverse range of offerings, we are transforming industries with our state-of-the-art drone technology and expert solutions.
        </p>
        </ScrollSection>
        <ScrollSection>
        <h3 className="text-2xl text-[#007791] lg:text-3xl font-bold mb-4">Our Services:</h3>
        </ScrollSection>
        <ScrollSection>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Surveillance
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Mapping & Surveying
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Precision Agriculture
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Facility Inspection
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Search & Rescue Missions
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>UAV Pilot Training Program
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>UAV Maintenance Program
          </li>
          <li className="flex items-start">
            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>UAV Procurement & Consultancy Services
          </li>
        </ul>
        </ScrollSection>
        <div className="bg-primary flex items-center p-4 mt-5 rounded-lg">
          <div className="flex items-center justify-center bg-white rounded-full w-14 h-14">
            <i className="fa fa-phone-alt text-green-500 text-2xl"></i>
          </div>
          <ScrollSection>
          <div className="ml-4">
            <p className="text-[#007791] text-lg font-medium">Contact Us 24/7</p>
            <h3 className="text-[#007791] text-xl font-bold">+234 7072 2618 83</h3>
          </div>
          </ScrollSection>
        </div>
      </div>
      
      {/* Right Column - Images */}
      <div className="relative min-h-[500px] pt-4">
        <div className="relative h-full">
          <img
            src={AboutMainImage}
            alt="About Us"
            className="w-3/4 h-auto mx-auto object-cover  shadow-lg"
          />
          <img
            src={AboutSecondaryImage}
            alt="About Detail"
            className="absolute bottom-4 right-4 w-1/2 h-1/2 object-cover bg-[rgb(225,240,242)] p-2  border-4 border-[rgb(225,240,242)]"
          />
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Drone Models Section */}
    
      <section className="py-16 pl-4 pr-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-12">Explore Our Drone Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {drones.map((drone, index) => (
              <div key={index} className="bg-white text-[#000000]] shadow-lg rounded-lg overflow-hidden">
                <img src={drone.image} alt={drone.name} className="w-full  h-64 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2">{drone.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm text-[#000000]">{drone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      

      {/* Testimonials Section */}
      <section className="py-16 pl-4 pr-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 lg:text-lg text-xs md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-[#007791] p-6 rounded-lg shadow-lg">
            <ScrollSection>
              <blockquote className="text-white mb-2">
                "I needed someone reliable to fix my gimbal after previous worst experience. I google search and Dr Drone was suggested by Google. I contacted him and I must confess the service and swift response was top notch. My gimbal works perfectly after the fix it."
              </blockquote>
              <cite className="font-semibold text-white">Omosanjo Adebowale</cite>
              </ScrollSection>
            </div>
            <div className="bg-[#007791] p-6 rounded-lg shadow-lg">
            <ScrollSection>
              <blockquote className="text-white mb-2">
                "I’m really happy with their service! My Mini 3 pro crashed which led to the Gimbal being stuck. I sent it to them, they narrowed down the issue and it's fixed. Completely recommend"
              </blockquote>
              <cite className="font-semibold text-white">Ekuma Inieke</cite>
              </ScrollSection>
            </div>
            <div className="bg-[#007791] p-8 rounded-lg shadow-lg">
            <ScrollSection>
              <blockquote className="text-white mb-2">
                "Thank you guys for making me a certified pilot and for fixing my drone on time and delivering to me as promised. Miss you guys especially my instructor, touch and sweet lol"
              </blockquote>
              <cite className="font-semibold text-white">Kemi Feyishara Adekunle</cite>
              </ScrollSection>
            </div>
            <div className="bg-[#007791] p-8 rounded-lg shadow-lg">
            <ScrollSection>
              <blockquote className="text-white mb-2">
                "He is very good trust me, My drone couldn’t be fixed in my state I had to send it to him and he was transparent about the whole process kudos to him."
              </blockquote>
              <cite className="font-semibold text-white">Chukwuemeka Onah Johnson</cite>
              </ScrollSection>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
