import { useGetAllCarsQuery } from "@/redux/features/Car/carApi";
import { TCar } from "@/redux/features/Car/carSlice";

const FeateuredCars = () => {
  const { data: allCars } = useGetAllCarsQuery(undefined);

  console.log(allCars);
  return (
    <div className="scroll-container">
    <div className="scroll-content">
      <div className="masonry sm:masonry-sm md:masonry-md">
        {allCars?.data?.map((car:TCar) => (
          <div key={car?._id} className="break-inside rounded-lg overflow-hidden">
            <img src={car?.image} alt={car?.name} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default FeateuredCars;
