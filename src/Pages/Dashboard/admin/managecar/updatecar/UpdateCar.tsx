/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ICarData } from "../addcar/AddCar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

import { useUpdateCarMutation } from "@/redux/features/Car/carApi";



interface UpdateCarProps {
  item: ICarData;
  id: string;
}

const UpdateCar = ({ item, id }: UpdateCarProps) => {
  console.log(id);

  //*image hosting in imagebb
  const image_hosting_key = "89453bbd17c420861c075bebff4de5e5";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, control } = useForm<ICarData>({
    defaultValues: item,
  });
    const  [updateCar] =  useUpdateCarMutation()
 

    const [features, setFeatures] = useState<string[]>(item.features || [""]);

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeatureField = () => {
    setFeatures([...features, ""]);
  };

  const removeFeatureField = (index: number) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setFeatures(newFeatures);
  };

 

  const onSubmit: SubmitHandler<ICarData> = async (data) => {
   
    const formData = new FormData();
    formData.append("image", data.image[0]);
  
    const res = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });
    const imageData = await res.json();

    const carData = {
      name: data.name,
      features,
      pricePerHour: Number(data.pricePerHour),
      image: imageData.data.url,
      isElectric: Boolean(data.isElectric),
      location: data.location,
      description: data.description,
      color: data.color,
      carType: data.carType,
    };


    console.log(carData);
    const updateCarData = {
      id,
      data: carData,
    };
    console.log(carData);
    try {
        const res = await updateCar(updateCarData).unwrap();
        console.log(res);
        if (res?.success) {
          toast.success("Update Car successfully!");
          reset();
          setOpen(false);
        }
      } catch (err) {
        const error = err as { data?: { message?: string } };
        toast.error(
          error?.data?.message || "Failed to update car. Please try again."
        );
      }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="btn-primary"
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="hover:text-[#CB1836] font-semibold">
            Update Car
          </DialogTitle>
          <DialogDescription>Make changes to your Car here.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              {...register("name")}
              id="name"
              defaultValue={item.name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">Image</Label>
            <Input
              {...register("image")}
              id="image"
              type="file"
              accept="image/*"
              className="col-span-3 text-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              {...register("description")}
              id="description"
              defaultValue={item.description}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="carType" className="text-right">
            Car Type
            </Label>
            <Controller
              name="carType"
              control={control}
              rules={{ required: true }}
              defaultValue={item.carType}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className=" col-span-3 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={"SUV"}>SUV</SelectItem>
                      <SelectItem value={"Hybrid"}>Hybrid</SelectItem>
                      <SelectItem value={"Sedan"}>Sedan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pricePerHour" className="text-right">
              Price Per Hour
            </Label>
            <Input
              {...register("pricePerHour")}
              id="pricePerHour"
              type="number"
              defaultValue={item.pricePerHour}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="features" className="text-right">
              Features
            </Label>
            <div className="col-span-3 flex flex-col gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="flex-1"
                  />
                  {features.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeFeatureField(index)}
                      className="bg-red-500 text-white"
                    >
                      -
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={addFeatureField}
                className="bg-[#FEA633] text-white mt-2"
              >
                + Add Feature
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="isElectric" className="text-right">
              Is Electric
            </Label>
            <Controller
              name="isElectric"
              control={control}
              rules={{ required: true }}
              defaultValue={item.isElectric}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value as any}>
                  <SelectTrigger className=" col-span-3 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={"false"}>No</SelectItem>
                      <SelectItem value={"true"}>Yes</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Controller
              name="location"
              control={control}
              rules={{ required: true }}
              defaultValue={item.location}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className=" col-span-3 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={"Dhaka"}>Dhaka</SelectItem>
                      <SelectItem value={"Chattogram"}>Chittagong</SelectItem>
                      <SelectItem value={"Feni"}>Feni</SelectItem>
                      <SelectItem value={"Noakhali"}>Noakhali</SelectItem>
                      <SelectItem value={"Coxbazar"}>Cox Bazar</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">
            Color
            </Label>
            <Input
              {...register("color")}
              id="color"
              type="text"
              defaultValue={item.color}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
          <Button
              type="submit"
              className="w-full btn-primary"
            >
              <span className=" relative z-10">Update Car</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCar;
