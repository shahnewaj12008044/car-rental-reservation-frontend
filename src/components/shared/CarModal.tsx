import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useUpdateBookingsMutation } from "@/redux/features/booking/bookingApi";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export interface IBookingModalProps {
  _id?: string;
  id: string;
  isBooked: "pending" | "approved" | "cancelled";
  endTime: string;
  startTime: string;
  car: { name: string; status: string; image: string; _id?: string };
  user: { _id?: string; name: string; email: string };
  payment: string;
  createdAt: Date;
  updatedAt: Date;
}

const CarModal = ({
  type,
  booking,
  children,
}: {
  type: string;
  booking: IBookingModalProps;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const [updateBooking, { isLoading, isError, isSuccess }] =
    useUpdateBookingsMutation();

  const handleConfirm = async () => {
    try {
      const bookingId = booking._id || booking.id;
      if (!bookingId) {
        throw new Error("Booking ID is undefined!");
      }
      const bookingData = {
        id: booking._id,
        data: {
          isBooked: "approved",
        },
      };
      const res = await updateBooking(bookingData).unwrap();
      console.log(res);

      setOpen(false);
    } catch (error) {
      console.error("Failed to update booking:", error);
    }
  };

  if (booking?.isBooked === "cancelled") {
    return (
      <div className="text-center">
        <Badge  className="btn-primary py-1">
          <span className="text-xs">Approve</span>
        </Badge>
      </div>
    );
  }
  if (booking?.isBooked === "approved") {
    return (
      <div className="text-center">
        <Button disabled className="btn-primary bg-opacity-30 rounded-full">
              <span className="text-xs">Approve</span>
            </Button>
      </div>
    );
  }

  if (booking?.payment === "paid") {
    return (
      <div className="text-center">
        <p className="text-orange-500">This booking already paid.</p>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="shad-dialog text-black sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">
            Confirm {type} Action
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to confirm this {type.toLowerCase()} action
            for car name: {booking?.car?.name}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <Button className="btn-primary" onClick={() => setOpen(false)}>
            No
          </Button>
          <Button
            className="btn-primary"
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Yes"}
          </Button>
        </div>
        {isError && <p className="text-red-500">Failed to update booking.</p>}
        {isSuccess && (
          <p className="text-green-500">Booking updated successfully!</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CarModal;
