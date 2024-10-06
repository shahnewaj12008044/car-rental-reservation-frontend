import { useGetMyBookingQuery } from "@/redux/features/booking/bookingApi";
import Loader from "@/components/shared/Loader";
import DataTable from "./dataTable/DataTable";
import { columns } from "./dataTable/columns/Columns";





const BookingManagement = () => {
  const { data, isLoading } = useGetMyBookingQuery({});

  if (isLoading) return <Loader />

  return (
    <div>
      <h1 className="text-2xl font-bold">My Booking</h1>
      <p className="">Manage Booking</p>
      <p className="flex justify-end font-semibold mb-4">
        Total Booking: {data?.data?.length}
      </p>
      <DataTable columns={columns} data={data?.data} />
    </div>
  );
};

export default BookingManagement;
