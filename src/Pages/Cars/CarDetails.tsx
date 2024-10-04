import { Link, useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Loader from "@/components/shared/Loader";
import ImageMagnifier from "./ImageMagnifier";
import { Badge } from "@/components/ui/badge";
import { useGetSingleCarQuery } from "@/redux/features/Car/carApi";
import Lottie from "lottie-react";
import NoData from "./../../assets/NoDataFound.json";

interface ICar {
  name: string;
  description: string;
  pricePerHour: number;
  image: string;
  features: string[];
  status: string;
  reviews: IReview[];
}

interface IReview {
  reviewer: string;
  comment: string;
  rating: number;
}

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()

  const { data, isLoading, isError } = useGetSingleCarQuery(id);

  if (isLoading) return <Loader />;
  if (isError || !data) return  <div className="flex flex-col gap-8 justify-center items-center">
  <Lottie animationData={NoData} loop={false} />
  <Button onClick={()=>navigate(-1)}>Go Back</Button>
</div>;
  const { name, description, pricePerHour, image, features, status, reviews } =
    data.data as ICar;

  return (
    <div className="container mx-auto p-6 py-10">
      <div className="flex flex-wrap">
        {/* Car Image Section */}
        <div className="w-full image-container lg:w-1/2">
          <ImageMagnifier
            src={image}
            width={400} // Provide the width (e.g., 400px)
            height={300} // Provide the height (e.g., 300px)
            alt="Product Image" // Provide alt text
            className="rounded-md" // Optional: custom Tailwind CSS classes
            magnifierHeight={150} // Optional: height of magnifier (default is 200)
            magnifierWidth={150} // Optional: width of magnifier (default is 200)
            zoomLevel={2} // Optional: magnification level (default is 1.5)
          />
        </div>

        {/* Car Details Section */}
        <div className="w-full lg:w-1/2 pl-6 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Name: {name}</h2>
          <p className="text-lg mb-4">Description: {description}</p>
          <p className="text-2xl font-bold mb-4">
            Price: ${pricePerHour} /hour
          </p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="flex flex-wrap gap-2">
              {features?.map((feature, index) => (
                <li key={index} className="text-sm mb-1">
                  <Badge variant="secondary">- {feature}</Badge>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability Status */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Availability</h3>
            <Badge
              className={`px-2 py-1 rounded ${
                status === "available"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
              variant="outline"
            >
              {status}
            </Badge>
          </div>

          {/* Additional Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Additional Features</h3>
            {["Wifi", "GPS", "Child Seat"].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <Checkbox id={feature.toLowerCase()} />
                <label
                  htmlFor={feature.toLowerCase()}
                  className="text-sm font-medium leading-none"
                >
                  {feature}
                </label>
              </div>
            ))}
          </div>

          {/* Insurance Options */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Insurance Options</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox id="basic-insurance" />
              <label
                htmlFor="basic-insurance"
                className="text-sm font-medium leading-none"
              >
                Basic Insurance (Included)
              </label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox id="full-insurance" />
              <label
                htmlFor="full-insurance"
                className="text-sm font-medium leading-none"
              >
                Full Coverage Insurance (+$15/day)
              </label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox id="premium-insurance" />
              <label
                htmlFor="premium-insurance"
                className="text-sm font-medium leading-none"
              >
                Premium Insurance (+$25/day, includes theft protection)
              </label>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="py-4 border-y space-y-4">
            <h3 className="text-xl font-semibold text-gray-600 mb-1">
              Cancellation Policy:
            </h3>
            <p className="text-gray-600 p-4 bg-gray-100 w-full rounded-xl">
              You can cancel your booking at no cost up to 24 hours before the
              scheduled pick-up time. Cancellations made within 24 hours of the
              pick-up time may incur a fee. No refunds will be given for
              no-shows or early returns. Changes to your booking may affect the
              cancellation terms.
            </p>
          </div>

          {/* Book Now Button */}
          <Button
            className="btn-primary w-full"
            disabled={status === "unavailable"}
            aria-label="Book Now"
          >
            <Link to={`/booking-form/${id}`}>Book Now</Link>
          </Button>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        <div>
          {reviews?.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <p className="font-semibold">{review.reviewer}</p>
                <p>{review.comment}</p>
                <p className="text-yellow-500">Rating: {review.rating}/5</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
