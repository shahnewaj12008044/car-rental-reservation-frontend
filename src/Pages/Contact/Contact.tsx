import { FaClock, FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import contact from './../../assets/contact.json'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { SiMinutemailer } from "react-icons/si";

const ContactUs = () => {
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
    <div className="my-4">
     
        <h1 className="text-center font-bold text-4xl pt-16 flex justify-center items-center mx-auto tracking-wide text-[#020C29] underline my-4">
          Contact <span className="text-orange-600 ">Us</span> 
        </h1>
    
      <section className="py-2">
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
      </section>
      <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg md:w-[600px] mx-auto">
        {/* Image Section */}
        <div className="w-full mt-16 md:w-1/2 mb-6 md:mb-0">
        <Lottie  animationData={contact} loop={true} />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 md:ml-6">
          <h2 className="text-2xl font-bold mb-4">
            Get in <span className="text-orange-500">touch!</span>{" "}
          </h2>
          <form className="space-y-4">
            <div>
              <Label className="block text-sm font-medium text-gray-600">
                Name
              </Label>
              <Input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                type="tel"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700">
                Comments
              </Label>
              <Textarea
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Comments"
                required
              ></Textarea>
            </div>
            <div>
              <Button
                type="submit"
                className="btn-primary w-full flex items-center"
              >
                <span className=" relative z-10 mr-2">Send Enquiry</span> <SiMinutemailer className="mt-1 size-6"/>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
