import { TCar } from "@/redux/features/Car/carSlice";

const GridColumn = ({ cars  } : {cars:TCar[]}) => (
  <div className="grid gap-4 image-fluid">
  {cars?.map((car: TCar) => (
    <div key={car?._id} className="break-inside rounded-lg overflow-hidden relative  magnifier">
      <img src={car?.image} alt={car?.name} className="w-full h-full object-cover " />
      <div className="absolute px-5 inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h1 className="font-bold text-xl">Name: {car?.name}</h1>
        <p>Type: {car?.carType}</p>
        <p>Location: {car?.location}</p>
        <p className="text-orange-500">Price per hour: {car?.pricePerHour}</p>
      </div>
    </div>
  ))}
</div>

);

export default GridColumn;