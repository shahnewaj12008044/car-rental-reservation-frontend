import { useGetAdminDashboardCountQuery } from "@/redux/features/booking/bookingApi";
import { Chart } from "./Chart";

type TItem = {
  name:string;
  value:string;
}
const AdminDashboard = () => {
  const {data} = useGetAdminDashboardCountQuery({})
  console.log(data)

  return (
       <div className="my-4 py-2">
           <h1 className="font-bold text-center text-[#020C29] dark:text-white underline italic text-2xl">Welcome to <span className="text-orange-500">Admin Dashboard</span></h1>
           <div className="flex  flex-col justify-around md:flex-row px-4 py-8 rounded-md shadow-md gap-2 items-center">
            {
              data?.data?.map((item:TItem) =>(
                <div className="flex flex-col w-full items-center rounded-md bg-white px-4 py-6">
                 <h1 className="font-bold text-gray-600"> Name:  {item.name}</h1>
                <p className="font-semibold text-orange-600 italic">  Value:{item.value}</p>
                </div>
              ))
            }
           </div>
            <Chart></Chart>
           
        </div>
);
};

export default AdminDashboard;