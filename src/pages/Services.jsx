import AboutMainImage from '../assets/Drone-img/Drone7.jpg';
import AboutSecondaryImage from '../assets/Drone-img/Drone9.jpg';


const Services = () => {
     return (
       <div className="">


<section className="container-xxl py-5  bg-[rgb(225,240,242)]">
<div className="container mx-auto px-6 mt-28 lg:px-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Left Column - Text */}
    <div className="flex flex-col justify-center">
      <h6 className="text-secondary text-[#007791]  text-sm font-bold mb-2">What We Offer At</h6>
      <h1 className="text-2xl lg:text-3xl text-[#007791] font-bold mb-4">
        Dr Drone Nig. Ltd 
      </h1>
      <p className="text-gray-700 mb-4">
        We specialize in providing innovative Unmanned Aerial Vehicle (UAV) services that deliver unmatched precision, efficiency, and safety. With a diverse range of offerings, we are transforming industries with our state-of-the-art drone technology and expert solutions.
      </p>
      <h3 className="text-2xl text-[#007791] lg:text-3xl font-bold mb-4">Our Services:</h3>
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


  </div>
)};

export default Services;