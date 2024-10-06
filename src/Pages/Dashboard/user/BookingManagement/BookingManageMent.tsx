import { useGetMyBookingQuery } from "@/redux/features/booking/bookingApi";
import Loader from "@/components/shared/Loader";
import DataTable from "./dataTable/DataTable";
import { columns } from "./dataTable/columns/Columns";





const BookingManagement = () => {
  const { data, isLoading } = useGetMyBookingQuery({});

  if (isLoading) return <Loader />

  return (
    <div>
      <h1 className="text-2xl text-center underline italic text-[#020C29] font-bold">My Booking</h1>
      <p className="text-xl underline text-orange-600 italic font-bold border-l-4 p-4 border-l-orange-400 rounded-md bg-white my-4">Manage Booking</p>
      <p className="flex justify-end font-semibold mb-4">
        Total Booking: {data?.data?.length}
      </p>
      <DataTable columns={columns} data={data?.data} />
    </div>
  );
};

export default BookingManagement;
