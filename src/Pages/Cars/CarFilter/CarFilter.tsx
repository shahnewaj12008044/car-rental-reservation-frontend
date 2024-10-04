import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetAllCarsQuery } from "@/redux/features/Car/carApi";
import { TCar } from "@/redux/features/Car/carSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface QueryParams {
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  model?: string;
  sort?: string;
  location?: string;
  carType?: string;
}

interface SearchProps {
  setQueryParams: (params: QueryParams) => void;
  queryParams: QueryParams;
}

type QueryField = keyof QueryParams;

const CarFilter: React.FC<SearchProps> = ({ setQueryParams, queryParams }) => {
  const { register, reset } = useForm();
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sort, setSort] = useState("");

  //*getting the car data for location and carType
  const { data: cars } = useGetAllCarsQuery(undefined);

  //&setting unique types in an array
  const carType = [...new Set(cars?.data?.map((car:TCar)=>car?.carType))]
  //&setting unique location in an array
  const carLocations = cars?.data?.reduce((acc : string[], car:TCar)=>{
    if(!acc.includes(car?.location)){
      acc.push(car?.location)
    }
    return acc;
  },[])


  
  // Use the defined type for the field parameter
  const handleInputChange = (field: QueryField, value: string) => {
    setQueryParams({ ...queryParams, [field]: value });
  };

  const handlePriceChange = (field: "min" | "max", value: string) => {
    const updatedPriceRange = { ...priceRange, [field]: value };
    setPriceRange(updatedPriceRange);

    setQueryParams({
      ...queryParams,
      minPrice: Number(updatedPriceRange.min),
      maxPrice: Number(updatedPriceRange.max),
    });
  };

  const handleClear = () => {
    setPriceRange({ min: "", max: "" });
    setSort("");
    setQueryParams({});
    reset({ searchTerm: "", carType: "", location: "", sort: "" });
  };

  return (
    <div className="bg-[#1d1d1d] sticky top-2 py-2 px-4 rounded-md">
      <h3 className="text-2xl font-semibold text-white mb-6">Filter Cars</h3>
      <Button
        type="button"
        onClick={handleClear}
        className="btn-primary w-full mb-2"
      >
        <span className=" relative z-10">Clear All</span>
      </Button>
      <div className="mb-2">
        <Label className="block text-white mb-2">Search</Label>
        <Input
          type="searchTerm"
          {...register("searchTerm")}
          placeholder="Search by name"
          onChange={(e) => handleInputChange("searchTerm", e.target.value)}
          className="w-full p-3 rounded-sm bg-gray-700 text-white"
        />
      </div>

      <div className="mb-2">
        <Label className="block text-white mb-2">Car Type</Label>
        <select
          {...register("carType")}
          onChange={(e) => handleInputChange("carType", e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option >All Type</option>
          {carType?.map((car,index)=>(
            <option key={index} value={car as string}>{car as string}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <Label className="block text-white mb-2">Location</Label>
        <select
          {...register("location")}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option >All location</option>
        {carLocations?.map((locaion : string,index : number)=>(
          <option key={index} value={locaion }>{locaion as string}</option>
        ))}
        </select>
      </div>

      <div className="mb-2">
        <Label className="block text-white mb-2">Price Range</Label>
        <div className="flex items-center justify-between gap-4">
          <Input
            type="number"
            min="0"
            value={priceRange.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
            placeholder="Min"
            className="w-1/2 p-3 rounded-sm bg-gray-700 text-white"
          />
          <Input
            type="number"
            min="0"
            value={priceRange.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
            placeholder="Max"
            className="w-1/2 p-3 rounded-sm bg-gray-700 text-white"
          />
        </div>
        <p className="text-white mt-2">
          Price Range: {priceRange.min || 0} - {priceRange.max || 0}
        </p>
      </div>

      <div>
        <Label className="block text-white mb-2">Sort By</Label>
        <select
          value={sort}
          onChange={(e) => {
            const selectedSort = e.target.value;
            setSort(selectedSort);
            handleInputChange("sort", selectedSort);
          }}
          className="w-full p-3 bg-gray-700 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Default</option>
          <option value="pricePerHour">Price: Low to High</option>
          <option value="-pricePerHour">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CarFilter;
