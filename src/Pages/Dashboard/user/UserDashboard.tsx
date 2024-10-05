import BookingManageMent from "./BookingManagement/BookingManageMent";
import Profile from "./Profile/Profile";

const UserDashboard = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-[#020C29] underline italic text-2xl">
        Welcome to <span className="text-orange-500">Car rental</span>
      </h1>
      <Profile></Profile>
      <BookingManageMent></BookingManageMent>
    </div>
  );
};

export default UserDashboard;
