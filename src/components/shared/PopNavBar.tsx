import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { logout, selectCurrentUser } from "@/redux/features/Auth/AuthSlice";

const PopNavBar = ({ isPopNavbar }: { isPopNavbar: boolean }) => {
  const user = useAppSelector(selectCurrentUser);
  // console.log(user)
  const userNavs = [
    { name: "Dashboard", path: `/${user?.role}/dashboard` },
    { name: "Booking Management", path: "/booking-management" },
    { name: "Payment Management", path: "/payment-management" },
  ];
  const dispatch = useAppDispatch()
  // console.log(user)
  const handleLogOut = () =>{
    dispatch(logout())
  }

  return (
    <div
      className={`bg-slate-200 transform transition-all ease-in-out duration-500 px-5 py-8 rounded-md absolute top-0 right-2 z-50 shadow-lg ${
        isPopNavbar ? "translate-y-20 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{ transitionDelay: isPopNavbar ? "0.2s" : "0s" }}
    >
      <div className="flex flex-col gap-2 ">
        {userNavs.map((nav, index) => (
        
             <NavLink key={index}  to={nav.path} className="text-lg hover:text-orange-600 pb-2 border-b-2 border-slate-400 last:border-b-0 last:pb-0">
            {nav.name}
          </NavLink>

        ))}
        <Button onClick={handleLogOut} className="btn-primary">Logout</Button>
      </div>
    </div>
  );
};

export default PopNavBar;

/*
import { NavLink } from "react-router-dom";

const PopNavBar = ({ isPopNavbar }: { isPopNavbar: boolean }) => {
  const userNavs = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Booking Management", path: "/booking-management" },
    { name: "Payment Management", path: "/payment-management" },
  ];

  return (
    <div
      className={`bg-white transform transition-all ease-in-out duration-500 px-5 py-8 rounded-md absolute top-0 right-2 shadow-lg ${
        isPopNavbar ? "translate-y-20 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{ transitionDelay: isPopNavbar ? "0.2s" : "0s" }}
    >
      <div className="flex flex-col gap-5">
        {userNavs.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.path}
            className="text-lg hover:text-blue-600 pb-2 border-b border-gray-300 last:border-b-0"
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PopNavBar;

 */