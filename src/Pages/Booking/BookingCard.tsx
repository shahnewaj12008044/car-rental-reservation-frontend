import { Button } from "@/components/ui/button";
import { TCar } from "@/redux/features/Car/carSlice";

import { Link } from "react-router-dom";

const BookingCard = ({ car }: { car: TCar }) => {
  return (
    <div className="lg:max-w-80 h-full rounded-lg border border-gray-200 p-4 flex flex-col gap-4">
      <div className="image-fluid">
        <img
          className="rounded-md magnifier size-80 "
          src={car?.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-[#020C29] ">{car?.name}</h3>
          <p>{car?.description.slice(0, 60) || "Description not available"}</p>
          <p className="text-[#020C29] dark:text-white">
            Location: {car?.location}
          </p>
          <div className="flex justify-between items-center">
            <h3 className=" font-semibold text-orange-600">
              Price Per Hour: <span className="">$ {car?.pricePerHour}</span>
            </h3>
          </div>
        </div>

       <div className="flex flex-col gap-2">
       <Link to={`/car-details/${car?._id}`}>
          <Button className="btn-primary w-full">
            <span className=" relative z-10">See Details</span>
          </Button>
        </Link>
        <Link to={`/booking-form/${car?._id}`}>
          <Button disabled={car?.status==="unavailable"} className={`btn-primary w-full   ${
              car.status === "unavailable" ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            <span className=" relative z-10">Book Now</span>
          </Button>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default BookingCard;
