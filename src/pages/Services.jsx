import Drone19 from '../assets/Drone-img/Drone19.jpg';
import Drone20 from '../assets/Drone-img/Drone20.jpg';


const Services = () => {
     return (
       <div className="">


<section className="container-xxl py-5  bg-[rgb(225,240,242)]">
<div className="container mx-auto px-6 mt-28 lg:px-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Left Column - Text */}
    <div className="flex flex-col justify-center">
      <h6 className="text-secondary text-[#007791]  text-sm font-bold mb-2"></h6>
      <h1 className="text-2xl lg:text-3xl text-[#007791] font-bold mb-4">
        Welcome! 
      </h1>
      <p className="text-gray-700 mb-4">
      Whether you're looking to streamline operations with drone data, enhance safety with UAV inspections, or train your team to operate drones effectively, Dr Drone Nig. Ltd is your trusted partner in UAV solutions.
      Let’s innovate together and take your business to new heights with our cutting-edge drone services.
      </p>
      <h3 className="text-2xl text-[#007791] lg:text-3xl font-bold mb-4">Our Services:</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1  mr-2"></i>Surveillance:
        </li>
        <p>We offer comprehensive aerial surveillance services for security, monitoring, and data collection. Our drones provide real-time insights, delivering critical information for law enforcement, military, and private sectors.
        </p>
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Mapping & Surveying:
        </li>
        <p>Our advanced drones equipped with high-precision sensors and cameras create detailed, accurate maps for land surveying, construction projects, and environmental monitoring. We help organizations make informed decisions through high-quality geospatial data.
        </p>
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Precision Agriculture:
        </li>
        <p>By leveraging drones for aerial pesticides and herbicides spraying, seeds and fertilizer spreading, crop monitoring and analysis, we help farmers optimize crop yields, improve resource management, and implement precision agriculture techniques. Our UAVs provide actionable insights into soil health, irrigation, and pest control.
        </p>
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Facility Inspection:
        </li>
        <p>Our UAVs offer efficient and safe inspection services for infrastructure such as well heads, power lines, bridges, telecommunications towers and other core infrastructures. With high-resolution imaging and thermal scanning, we help reduce downtime and prevent costly repairs.
        </p>
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1 mr-2"></i>Search & Rescue Missions:
        </li>
        <p>In emergencies, time is critical. Our drones are deployed in search and rescue operations to provide aerial views in difficult-to-reach areas, helping locate missing persons and assess hazardous situations quickly and effectively.
        </p>
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1 mr-2"></i>UAV Pilot Training Program:
        </li>
        <p>We offer comprehensive UAV training programs that equip aspiring pilots with the skills, certifications, and safety protocols necessary to operate drones professionally. Our hands-on approach ensures thorough understanding and readiness for real-world flight operations.
        </p>
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1 mr-2"></i>UAV Maintenance Program:
        </li>
        <p>Our specialized maintenance services keep UAV fleets operating at peak performance. From routine check-ups to advanced repairs, we ensure that every drone is in top condition, reducing downtime and ensuring the safety of operations.
        </p>
        <li className="flex items-start text-[#007791] font-bold">
          <i className="fa fa-check text-green-500 mt-1 mr-2"></i>UAV Procurement & Consultancy Services
        </li>
        <p>We assist businesses in selecting, acquiring, and integrating UAV technology tailored to their needs. Our consultancy services provide expert advice on drone selection, regulations, and best practices, helping companies navigate the rapidly evolving UAV landscape.
        </p>
      </ul>
      <div className="bg-primary flex items-center p-4 mt-5 rounded-lg">
        <div className="flex items-center justify-center bg-white rounded-full w-14 h-14">
          <i className="fa fa-phone-alt text-green-500 text-2xl"></i>
        </div>
        <div className="ml-4">
          <p className="text-[#007791] text-lg font-medium">Contact Us 24/7</p>
          <h3 className="text-[#007791] text-xl font-bold">+234 7072 2618 83</h3>
        </div>
      </div>
    </div>
    
    {/* Right Column - Images */}
    <div className="relative min-h-[500px] pt-4 flex justify-center items-center">
  <div className="relative max-w-[90%] mx-auto">
    {/* Main Image */}
    <img
      src={Drone19}
      alt="About Us"
      className="w-full h-[60vh]   object-cover transition-transform duration-300 hover:scale-105"
    />
    {/* Overlay Image */}
    <img
      src={Drone20}
      alt="About Detail"
      className="absolute -bottom-6 -left-6 w-[45%] h-auto  object-cover bg-[rgb(225,240,242)] p-2 border-[4px] border-[rgb(225,240,242)]  transition-transform duration-300 hover:rotate-3 hover:scale-110"
    />
  </div>
</div>

  </div>
</div>
</section>


  </div>
)};

export default Services;