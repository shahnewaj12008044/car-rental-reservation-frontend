import { FaClock, FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
const Contact = () => {
  const features = [
    {
      icon: <FaPhone className="text-4xl text-orange-500" />,
      title: "Phone Number",
      description: "123456789",
    },
    {
      icon: <FaEnvelope className="text-4xl text-orange-500" />,
      title: "Email Address",
      description: "mezba@gmail.com",
    },
    {
      icon: <FaMapMarker className="text-4xl text-orange-500" />,
      title: "Location",
      description: "Dhaka, Bangladesh",
    },
    {
      icon: <FaClock className="text-4xl text-orange-500" />,
      title: "Opening Hours",
      description: "Mon - sun (10.00AM - 04.30PM)",
    },
  ];
  return (
    <div className="my-2">
      <h1 className="text-center font-bold text-xl pt-16 flex justify-center items-center mx-auto tracking-wide text-[#020C29] underline italic my-2">
        Contact <span className="text-orange-600 ">Us</span>
      </h1>

      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white p-6 flex flex-col rounded-lg shadow-lg text-center h-48">
                <div className="text-center mx-auto"> {feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description.slice(0, 100)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
