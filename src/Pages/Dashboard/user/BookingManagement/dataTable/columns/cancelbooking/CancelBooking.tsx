/* eslint-disable @typescript-eslint/no-unused-vars */

import { IBookingModalProps } from "@/components/shared/CarModal";

import { Button } from "@/components/ui/button";
import { useUpdateMyBookingMutation } from "@/redux/features/booking/bookingApi";

import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CancelBooking = ({id, booking}: {id: string, booking: IBookingModalProps}) => {
   const [cancelBooking] = useUpdateMyBookingMutation()
    const handleCancelBooking = async (id: string) => {
                
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, cancel it!",
        });
    
        if (result.isConfirmed) {
          try {
            const cancelData = {
             id: id,
              data:{
                isBooked:"cancelled"
              }
            }
            const res = await cancelBooking(cancelData).unwrap();
            if (res?.success) {
              Swal.fire({
                title: "Cancel!",
                text: "Your Cancel Booking.",
                icon: "success",
              });
            } else {
              toast.error("Failed to cancel booking");
            }
          } catch (err) {
            toast.error("Failed to cancel booking");
          }
        }
      };

      if (booking?.payment === "paid") {
        return (
          <div className="text-center">
            
          </div>
        );
      }
      if (booking?.isBooked === "approved") {
        return (
          <div className="text-center">
            
          </div>
        );
      }
      if (booking?.isBooked === "cancelled") {
        return (
          <div className="text-center">
           
          </div>
        );
      }
    


    return (
        <div>
             <Button  onClick={() => handleCancelBooking(id)} variant="destructive">
        cancel
      </Button>
        </div>
    );
};

export default CancelBooking;