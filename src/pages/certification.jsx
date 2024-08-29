import cac from '../assets/Drone-img/cac.jpg'; 

const Certification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-[#097C7C] flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-[#097C7C]">CAC Registration Certificate</h1>
        <img src={cac} alt="CAC Registration Certificate" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Certification;
