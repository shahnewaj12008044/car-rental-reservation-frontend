import BookingDetailsTable from "./Profile/BookingDetails/BookingDetailsTable";
import Profile from "./Profile/Profile";

const UserDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-center text-[#020C29] dark:text-white underline italic text-2xl">
        Welcome to <span className="text-orange-500">Car rental</span>
      </h1>
      <Profile></Profile>
      <BookingDetailsTable/>
    </div>
  );
};

export default UserDashboard;
