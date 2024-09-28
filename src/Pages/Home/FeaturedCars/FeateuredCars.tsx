import { useGetAllCarsQuery } from "@/redux/features/Car/carApi";
import GridColumn from "./GridColumns";



const FeateuredCars = () => {
  const { data: allCars } = useGetAllCarsQuery(undefined);


  const columns = [
    allCars?.data?.slice(0, 6),
    allCars?.data?.slice(6, 12),
    allCars?.data?.slice(12, 16),
  ];

  return (
    <div className="flex flex-col py-4">
      <h1 className="text-color text-xl font-bold text-center my-4 underline">
        Explore the best <span className="text-orange-500">Driving Machine</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {columns.map((cars, index) => (
          <GridColumn key={index} cars={cars} />
        ))}
      </div>
    </div>
  );
};


//^nice masnory grid layout


export default FeateuredCars;
