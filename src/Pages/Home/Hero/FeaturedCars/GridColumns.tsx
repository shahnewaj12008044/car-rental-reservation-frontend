import { TCar } from "@/redux/features/Car/carSlice";

const GridColumn = ({ cars  } : {cars:TCar[]}) => (
  <div className="grid gap-4">
    {cars?.map((car: TCar) => (
      <div key={car?._id} className="break-inside rounded-lg overflow-hidden relative group">
        <img src={car?.image} alt={car?.name} className=" w-full h-full object-cover" />
        <div className= "absolute px-5 inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h1 className="font-bold text-xl">Name:{car?.name}</h1>
          <p>Type: {car?.carType}</p>
          <p>description: {car?.description.substring(0,50)}</p>
          <p>Location: {car?.location}</p>
          <p className="text-orange-500">price per hour: {car?.pricePerHour}</p>
        </div>
      </div>
      
    ))}
  </div>
);

export default GridColumn;