import { IoCarSportOutline } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";

const WhyChoseUs = () => {
  const whyChooseUs = [
    {
     icon:<IoCarSportOutline className="size-16 text-[#1d1d1d]" />,
      title: "Wide Selection of Vehicles",
      description:
        "Choose from a wide range of vehicles to suit your needs, from compact cars to luxury SUVs. We have the perfect car for every occasion.",
    },
    {
        icon:<FaHandHoldingDollar className="size-16 text-[#1d1d1d]"/>,
      title: "Affordable Rates",
      description:
        "Enjoy competitive pricing and great deals on all our rental cars. We offer transparent pricing with no hidden fees.",
    },
    { icon:<RiCustomerService2Fill className="size-16 text-[#1d1d1d]"/>,
      title: "Excellent Customer Service",
      description:
        "Our friendly and knowledgeable staff are here to assist you 24/7. We strive to provide the best customer service experience.",
    },
  ];

  return (
   <div className="py-4 ">
    <h1 className="text-center  text-2xl font-bold text-[#020C29] underline my-4">Why Choose <span className="text-orange-600">Us?</span></h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
      {whyChooseUs?.map((item,index) => (
        <div key={index} className="bg-gradient rounded-lg shadow-lg shadow-orange-900">
        <div className="px-4 py-8 flex flex-col items-center">
          <div className="flex justify-center items-center mb-4">
            {item.icon}
          </div>
          <h1 className="text-xl text-center font-bold text-[#1d1d1d] my-3">{item.title}</h1>
          <p className="text-[#1d1d1d] font-semibold text-center">{item.description}</p>
        </div>
      </div>
      ))}
    </div>
   </div>
  );
};

export default WhyChoseUs;
