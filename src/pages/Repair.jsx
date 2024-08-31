import  { useState } from 'react';

const Repair = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
       setIsModalOpen(true);
     };
   
     const closeModal = () => {
       setIsModalOpen(false);
     };
   
     return (
       <div className="min-h-screen bg-white text-gray-800 mt-24 p-6">
         {/* Header Section */}
         <div className="bg-[#007791] p-8 rounded-lg shadow-md text-center mb-10">
           <h1 className="text-4xl font-bold text-white mb-4">Drone Repair Services</h1>
           <p className="text-lg text-white">Reliable, professional, and budget-friendly drone consultancy, maintenance, and repair services.</p>
         </div>
   
         {/* Main Content Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Our Services Section */}
           <div className="bg-white p-6 rounded-lg shadow-lg border border-[#007791]">
             <h2 className="text-2xl font-semibold text-[#007791] mb-4">Our Services</h2>
             <p className="text-gray-600 mb-4">We fix all types of drone issues, including firmware and hardware problems:</p>
             <div className="space-y-4">
               <div>
                 <h3 className="text-xl font-semibold text-[#007791]">Firmware Issues</h3>
                 <ul className="list-disc list-inside text-gray-600 mt-2">
                   <li>Signal lost</li>
                   <li>Mid-air aircraft disconnection</li>
                   <li>System failure</li>
                   <li>Component malfunction</li>
                   <li>And more...</li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-xl font-semibold text-[#007791]">Hardware Issues</h3>
                 <ul className="list-disc list-inside text-gray-600 mt-2">
                   <li>Broken Parts</li>
                   <li>Replacement Parts</li>
                   <li>Hardware malfunction</li>
                   <li>And more...</li>
                 </ul>
               </div>
             </div>
           </div>
   
           {/* Repair Process Section */}
           <div className="bg-white p-6 rounded-lg shadow-lg border border-[#007791]">
             <h2 className="text-2xl font-semibold text-[#007791] mb-4">Repair Process</h2>
             <ol className="list-decimal list-inside text-gray-600 space-y-2">
               <li>Check drone into the repair queue upon receipt.</li>
               <li>Perform extensive damage assessment and diagnosis.</li>
               <li>Forward diagnosis invoice and damage report.</li>
               <li>Upon payment, repair invoice forwarded and repair initiated.</li>
               <li>Communicate estimated repair completion time.</li>
               <li>Conduct a full bench and flight test.</li>
               <li>Send test report via Email.</li>
               <li>Ship drone to the agreed location after payment confirmation.</li>
             </ol>
           </div>
         </div>
   
         {/* Schedule Repair Section */}
         <div className="bg-[#007791] text-white p-8 rounded-lg shadow-md mt-10 text-center">
           <h2 className="text-3xl font-semibold mb-4">How to Schedule a Repair</h2>
           <p className="text-lg mb-4">Fill out the <strong>"Repair Form"</strong> below with your details and issue description. Our technical expert will reach out to you shortly.</p>
           <button
             className="bg-white text-[#007791] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
             onClick={openModal}
           >
             Fill Repair Form
           </button>
         </div>
   
         {/* Shipping Section */}
         <div className="bg-white p-6 rounded-lg shadow-lg border border-[#007791] mt-10">
           <h2 className="text-2xl font-semibold text-[#007791] mb-4">Shipping Instructions</h2>
           <p className="text-gray-600 mb-4">Please pack the following components securely for shipping:</p>
           <ul className="list-disc list-inside text-gray-600 mb-4">
             <li>The drone</li>
             <li>1 battery</li>
             <li>1 set of propellers</li>
             <li>Remote control</li>
             <li>Gimbal and camera</li>
           </ul>
           <p className="text-gray-600">Send a copy of the waybill document to <strong>Drdronenigltd@gmail.com</strong> for easy tracking. Our agent will coordinate the best shipping channel.</p>
         </div>
   
         {/* Contact Section */}
         <div className="bg-[#007791] text-white p-6 rounded-lg shadow-md mt-10 text-center">
           <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
           <p className="text-lg">If you have any questions or concerns about your repair, please contact our support team at <strong>Drdronenigltd@gmail.com</strong>.</p>
         </div>
   
         {/* Modal Section */}
         {isModalOpen && (
           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
             <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
               <button
                 className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                 onClick={closeModal}
               >
                 &times;
               </button>
               <h2 className="text-2xl font-semibold text-[#007791] mb-4">Repair Form</h2>
               <form className="space-y-4">
                 <div>
                   <label className="block text-gray-700 font-medium mb-2">Name</label>
                   <input
                     type="text"
                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007791]"
                     placeholder="Your Name"
                   />
                 </div>
                 <div>
                   <label className="block text-gray-700 font-medium mb-2">Email</label>
                   <input
                     type="email"
                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007791]"
                     placeholder="Your Email"
                   />
                 </div>
                 <div>
                   <label className="block text-gray-700 font-medium mb-2">Drone Model</label>
                   <input
                     type="text"
                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007791]"
                     placeholder="Drone Model"
                   />
                 </div>
                 <div>
                   <label className="block text-gray-700 font-medium mb-2">Issue Description</label>
                   <textarea
                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007791]"
                     placeholder="Describe the issue in detail"
                     rows="4"
                   />
                 </div>
                 <button
                   type="submit"
                   className="w-full bg-[#007791] text-white p-3 rounded-lg font-semibold hover:bg-[#005a64] transition duration-200"
                 >
                   Submit Repair Request
                 </button>
               </form>
             </div>
           </div>
         )}
       </div>
     );
   };
   
export default Repair;
