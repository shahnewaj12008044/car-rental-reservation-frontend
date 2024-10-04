import { useState } from "react";
import logo from "/logo.jpg";
import { Link, NavLink } from "react-router-dom";


import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, selectCurrentUser } from "@/redux/features/Auth/AuthSlice";
import { FaUserAlt } from "react-icons/fa";
import PopNavBar from "./PopNavBar";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopNavbar, setIsPopNavbar] = useState(false)
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()
  // console.log(user)
  const handleLogOut = () =>{
    dispatch(logout())
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/carList" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="bg-navbar relative w-full flex  md:flex-row justify-between items-center py-4 mx-auto px-4">
  <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0">
    <img
      className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-orange-600 rounded-full"
      src={logo}
      alt="logo"
    />
    <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-color ">
      Car <span className="text-orange-500">Rental</span>
    </h2>
  </Link>
  <ul className="hidden md:flex mx-auto text-center items-center justify-center">
    {navLinks.map((item) => (
      <li key={item.name} className="p-2 text-[16px] md:text-[21px]">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-color transition-color duration-100  hover:text-orange-600 underline font-bold"
              : "text-color transition-color duration-100 hover:text-orange-600 font-semibold "
          }
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>

    <div className="hidden md:flex">
    {user?
     (<div>
      <FaUserAlt onClick={()=>setIsPopNavbar(!isPopNavbar)} className="size-12 rounded-full p-2 text-[#020C29] ring-2 ring-orange-500" />
      <PopNavBar isPopNavbar = {isPopNavbar}></PopNavBar>
     </div>):
    (<Link to = "/login"> <Button className="btn-primary">Login</Button></Link>)}
    </div>



 {/* for mobile content */}
 <div
    onClick={() => setIsOpen(!isOpen)}
    className={`block md:hidden cursor-pointer transition-transform duration-300 transform ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
  >
    {isOpen ? (
      <AiOutlineClose className="text-orange-400 w-6 h-6" />
    ) : (
      <AiOutlineMenu className="text-orange-400 w-6 h-6" />
    )}
  </div>
  <ul
    className={
      isOpen
        ? "fixed z-10 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-orange-400 bg-[#020C29] ease-in-out duration-500"
        : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
    }
  >
    <h1 className="w-full text-lg font-bold m-4 text-orange-400 text-center">Car Rental</h1>
    {navLinks.map((item) => (
      <li key={item.name} className="p-4 border-b border-orange-500">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 underline"
              : "text-orange-300 hover:text-orange-600"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.name}
        </NavLink>
      </li>
    ))}
    <li className="p-4">
    {user?(<Button onClick={handleLogOut} className="btn-primary">Logout</Button>):(<NavLink to='/login'><Button className="btn-primary">Login</Button></NavLink>) }
    </li>
  </ul>
</div>

  );
};

export default Navbar;
