
import Loader from "@/components/shared/Loader";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetAllCarsQuery } from "@/redux/features/Car/carApi";
import { TCar } from "@/redux/features/Car/carSlice";

const Fleet = () => {
    const { data :carsdata ,isLoading} = useGetAllCarsQuery([{name:'limit',value:5}])
    // console.log(carsdata)

    if(isLoading){return <Loader/>}

  return (
 
<div className="flex flex-col my-6">
    <h1 className="text-xl font-bold italic underline text-[#020C29] text-center my-5">Our <span className="text-orange-500">Fleet</span></h1>
<Carousel
    opts={{
      align: "center",
    }}
    className="w-full my-2"
  >
    <CarouselContent className="flex gap-2">
      {carsdata?.data?.map((car:TCar) => (
        <CarouselItem key={car?._id} className="md:basis-1/2 lg:basis-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
         <img
            src={car.image}
               alt={car.name}
               className="w-full h-40 rounded-lg mb-4 object-cover"
             />
             <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
             <p className="text-gray-500 italic">{car?.carType}</p>
             <p className="text-gray-600">{car?.description}</p>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>
);
};

export default Fleet;