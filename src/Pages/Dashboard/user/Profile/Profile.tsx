import { Badge } from "@/components/ui/badge";
import { selectCurrentUser } from "@/redux/features/Auth/AuthSlice";
import { useGetMyProfileQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import { FaUserEdit } from "react-icons/fa";

import { UpadateProfile } from "./upDateProfile";

const Profile = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data: userData } = useGetMyProfileQuery(user?.userId);

  //    console.log(userData)

  return (
    <div className="w-full bg-white mx-auto rounded-md my-4 px-6 py-4">
      <h1 className=" text-xl font-bold text-[#020C29] italic underline mb-2 border-l-4 pl-2 bg-orange-600 bg-opacity-10 py-2 border-l-orange-500">
        Profile <span className="text-orange-500 ">Overview</span>
      </h1>
      <div className="flex flex-col  md:flex-row gap-2 justify-around items-center">
        <FaUserEdit className="size-28 ring-2 ring-orange-500 rounded-full p-1 bg-slate-200" />
        <div className="bg-slate-100 px-4 py-2 rounded-md flex flex-col gap-2">
          <h1 className="text-base font-bold  italic underline">Name:</h1>
          <p className="text-gray-800 font-bold">{userData?.data?.name}</p>
        </div>
        <div className="bg-slate-100 px-4 py-2 rounded-md flex flex-col gap-2">
          <h1 className="text-base font-bold  italic underline">email:</h1>
          <p className="text-gray-800 font-bold">{userData?.data?.email}</p>
        </div>
        <div className="bg-slate-100 px-4 py-2 rounded-md flex flex-col gap-2">
          <h1 className="text-base font-bold  italic underline">status:</h1>
          <Badge
            className={`${
              userData?.data?.status ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {userData?.data?.status}
          </Badge>
        </div>
        <div className="bg-slate-100 px-4 py-2 rounded-md flex flex-col gap-2">
          <h1 className="text-base font-bold  italic underline">phone:</h1>
          <p className="text-gray-800 font-bold">{userData?.data?.phone}</p>
        </div>
        <UpadateProfile></UpadateProfile>
      </div>
    </div>
  );
};

export default Profile;
