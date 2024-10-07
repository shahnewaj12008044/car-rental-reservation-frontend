import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { logout, selectCurrentUser } from "@/redux/features/Auth/AuthSlice";
type TNavoptions = {
  name:string;
  path:string;
}

const PopNavBar = ({ isPopNavbar }: { isPopNavbar: boolean }) => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user)
  let navOptions: TNavoptions[] = [];
  const userNavs = [
    { name: "Dashboard", path: `/${user?.role}/dashboard` },
    { name: "Booking Management", path: "/user/booking-management" },
    { name: "Payment Management", path: "/user/manage-payment" },
  ];
  const adminNavs = [
    { name: "Dashboard", path: `/${user?.role}/dashboard` },
    { name: "Booking Management", path: "/admin/manage-bookings" },
    { name: "Car Management", path: "/admin/manage-cars" },
    { name: "User Management", path: "/admin/manage-users" },
    { name: "Return cars", path: "/admin/return-cars" },
  ]
  switch (user?.role) {
    case 'admin':
      navOptions = [...adminNavs]
      break;
    case 'user':
      navOptions = [...userNavs]
      break;
    default:
      break;
  }
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
        {navOptions?.map((nav, index) => (
        
             <NavLink key={index}  to={nav.path} className="text-lg text-color hover:text-orange-600 pb-2 border-b-2 border-slate-400 last:border-b-0 last:pb-0">
            {nav.name}
          </NavLink>

        ))}
        <Button onClick={handleLogOut} className="btn-primary">Logout</Button>
      </div>
    </div>
  );
};

export default PopNavBar;

