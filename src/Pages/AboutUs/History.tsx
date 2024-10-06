

const CompanyHistory = () => {
  return (
   <div className="my-2">
    <h1 className="text-2xl dark:text-white text-[#020C29] text-center font-semibold italic underline">Our <span className="text-orange-500">History</span></h1>
     <div className="flex flex-col md:flex-row justify-around items-center p-6 space-y-4 md:space-y-0 md:space-x-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
      <h2 className="text-xl text-[#020C29] text-center italic underline font-bold mb-2">Founded in 2019</h2>
      <p className="text-gray-700">
        Drive Your Dreams: Premium Car Rentals has swiftly earned a reputation for excellence in the car rental industry.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
      <h2 className="text-xl text-[#020C29] text-center italic underline font-bold mb-2">Our Mission</h2>
      <p className="text-gray-700">
        Our mission is to deliver unparalleled car rental experiences that blend luxury, comfort, and reliability.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
      <h2 className="text-xl text-[#020C29] text-center italic underline font-bold mb-2">Trusted Excellence</h2>
      <p className="text-gray-700">
        Over the past 5 years, we have become a trusted name, known for our commitment to quality and customer satisfaction.
      </p>
    </div>
  </div>
   </div>
  );
};

export default CompanyHistory;
