
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
  
  } from "react-icons/fa";
  import { Link, NavLink } from "react-router-dom";
  import logo from "/logo.jpg";
  
  const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/" },
  ];
  
  const Footer = () => {
    return (
      <div className="w-full relative  bg-[#1d1d1d] py-6 px-8 text-gray-300">
          
      <div className="flex flex-col items-center">
        <Link to="/" className="flex items-center justify-center gap-2 mb-5">
          <img
            className="max-w-9 lg:max-w-14 border-2 border-orange-600 img-fluid rounded-full"
            src={logo}
            alt="logo"
          />
          <h2 className="font-bold text-lg md:text-xl lg:text-3xl text-orange-600">
            Car <span className="text-orange-600 hover:text-sky-400">Rental</span>
          </h2>
        </Link>
      </div>
    
      <div className="relative">
        <h1 className="text-center text-orange-600 underline font-bold my-4">
          Important Links
        </h1>
        <ul className="flex flex-col sm:flex-col lg:flex-row lg:justify-around lg:items-center text-center sm:text-sm lg:text-xl">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline font-bold hover:text-sky-400"
                  : "text-orange-600 font-semibold hover:text-sky-400"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline font-bold"
                  : "text-orange-600 font-semibold hover:text-sky-400"
              }
              to="/booking"
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline md:font-bold"
                  : "text-orange-600 md:font-semibold hover:text-sky-400"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 underline md:font-bold"
                  : "text-orange-600 md:font-semibold hover:text-sky-400"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="w-1/2 mx-auto my-4 text-orange-600">
          <div className="flex justify-between pt-4 text-2xl text-orange-600">
            {items.map((x, index) => {
              return (
                <x.icon
                  key={index}
                  className="size-6 cursor-pointer hover:text-sky-400 custom-transition"
                />
              );
            })}
          </div>
        </div>
        <p className="mt-auto text-center">all rights are reserved by @car Renters.com</p>
      </div>
    </div>
    
    
    );
  };
  
  export default Footer;
  