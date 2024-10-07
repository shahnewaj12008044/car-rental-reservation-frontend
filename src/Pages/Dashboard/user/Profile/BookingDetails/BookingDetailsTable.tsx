/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetMyBookingQuery } from "@/redux/features/booking/bookingApi";
import DetailsModal from "./DetailsModal";
import { useState } from "react";

const BookingDetailsTable = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null); // Store selected booking data

  const { data } = useGetMyBookingQuery({});
  // console.log(data);

  // Function to open the modal and set the selected booking
  const openDetailsModal = (booking: any) => {
    setSelectedBooking(booking);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-color mx-auto rounded-md my-4 px-6 py-4">
      <h1 className="text-xl font-bold text-[#020C29] italic underline mb-2 border-l-4 pl-2 bg-orange-600 bg-opacity-10 py-2 border-l-orange-500">
        Booking <span className="text-orange-500 ">Details</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Date</th>
              <th className="py-2 px-4 bg-gray-200">Car</th>
              <th className="py-2 px-4 bg-gray-200">Payment</th>
              <th className="py-2 px-4 bg-gray-200">Booking info</th>
              <th className="py-2 px-4 bg-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((booking: any) => (
              <tr key={booking._id}>
                <td className="border px-4 py-2">
                  {booking.date.split("T")[0]}
                </td>
                <td className="border px-4 py-2">{booking?.car?.name}</td>
                <td className="border px-4 py-2 text-center">
                  <Badge
                    className={`${
                      booking.payment === "pending"
                        ? "bg-red-700"
                        : "bg-green-600"
                    } px-4 py-1`}
                  >
                    {booking.payment}
                  </Badge>
                </td>
                <td className="border px-4 py-2 text-center">
                  <Badge
                    className={`${
                      booking.isBooked === "pending" || booking.isBooked === "cancelled"
                        ? "bg-red-700"
                        : "bg-green-600"
                    } px-4 py-1`}
                  >
                    {booking.isBooked}
                  </Badge>
                </td>
                <td className="border px-4 py-2 text-center">
                  <Button
                    onClick={() => openDetailsModal(booking)} // Pass booking data to modal
                    className="btn-primary"
                  >
                    <span className="text-sm">Details</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Booking Details */}
      {isDetailsModalOpen && selectedBooking && (
        <DetailsModal
          title="Booking Details"
          onClose={() => setIsDetailsModalOpen(false)}
        >
          <div className="flex flex-col space-y-4">
            <p>
              <strong>Date:</strong> {selectedBooking.date.split("T")[0]}
            </p>
            <p>
              <strong>Car:</strong> {selectedBooking?.car?.name}
            </p>
            <p>
              <strong>Total Cost:</strong> ${selectedBooking.totalCost}
            </p>
            <p>
              <strong>Payment Status:</strong> {selectedBooking.payment}
            </p>
            <p>
              <strong>Description:</strong> {selectedBooking.car?.description}
            </p>
            <p>
              <strong>Location:</strong> {selectedBooking.car?.location}
            </p>
            <Button
              className="btn-primary w-full"
              onClick={() => setIsDetailsModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </DetailsModal>
      )}
    </div>
  );
};

export default BookingDetailsTable;
