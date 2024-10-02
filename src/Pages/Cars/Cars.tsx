import CarCard from "@/components/shared/CarCard";
import Loader from "@/components/shared/Loader";
import { useEffect, useState } from "react";
import CarFilter from "./CarFilter/CarFilter";
import { TCar } from "@/redux/features/Car/carSlice";
import { useGetAllCarsQuery } from "@/redux/features/Car/carApi";
import Lottie from "lottie-react";
import NoData from './../../assets/NoDataFound.json'

interface QueryParams {
  search?: string;
  pricePerHour?: string;
  model?: string;
  sort?: string;
  location?: string;
}

const Car = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({});
  // console.log(queryParams)
  const transformedArray = Object.keys(queryParams).map((key) => ({
    name: key,
    value: queryParams[key as keyof QueryParams],
  }));

  const { data, refetch, isLoading } = useGetAllCarsQuery(transformedArray);

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  if (isLoading) return <Loader />;

  return (
    <section className="my-4">
      <div>
        <h1 className="text-center text-2xl italic underline font-bold text-[#020C29]">
          Explore the best{" "}
          <span className=" rounded-md text-orange-500">cars</span> in town
        </h1>
      </div>
      <div className="mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Section */}
          <div className="lg:w-1/4">
            <CarFilter
              setQueryParams={setQueryParams}
              queryParams={queryParams}
            />
          </div>

          {/* Cars Listing Section */}
          <div className="lg:w-3/4 grid grid-cols-1  md:grid-cols-2 gap-8">
            {data?.data?.length === 0 ? (
             <div className="flex justify-center items-center">
             <Lottie  animationData={NoData} loop={true} />
             </div>
            ) : (
              data?.data?.map((car: TCar) => (
                <CarCard key={car._id} car={car} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Car;
