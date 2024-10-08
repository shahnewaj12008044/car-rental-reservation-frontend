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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCarMutation } from "@/redux/features/Car/carApi";

import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export interface ICarData {
  _id:string;
  name: string
  image: string
  location: string
  description: string
  color: string
  isElectric: boolean
  status: string
  features: string[]
  pricePerHour: number
  isDeleted: boolean
  carType: string
}

const AddCar = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, control } = useForm<ICarData>();
  const [createCar] = useCreateCarMutation();

  const [features, setFeatures] = useState<string[]>([""]);


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
  const image_hosting_key =  "89453bbd17c420861c075bebff4de5e5";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


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
    try {
      const res = await createCar(carData).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success("Car added successfully!");
        reset();
        setOpen(false);
      }
    } catch (err) {
      const error = err as { data?: { message?: string } };
      toast.error(
        error?.data?.message || "Failed to add car. Please try again."
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 relative z-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <span className=" relative z-10">Create Car</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className=" hover:text-[#FEA633]] font-semibold">
            Add Car
          </DialogTitle>
          <DialogDescription>Make changes to your car here.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input {...register("name")} id="name" className="col-span-3" />
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
            <Label htmlFor="pricePerHour" className="text-right">
              Price Per Hour
            </Label>
            <Input
              {...register("pricePerHour")}
              id="pricePerHour"
              type="number"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              {...register("description")}
              id="description"
              type="text"
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
            <Label htmlFor="isElectric" className="text-right">
              Is Electric
            </Label>
            <Controller
              name="isElectric"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value as any}
                >
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
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className=" col-span-3 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={"dhaka"}>Dhaka</SelectItem>
                      <SelectItem value={"chittagong"}>Chittagong</SelectItem>
                      <SelectItem value={"feni"}>Feni</SelectItem>
                      <SelectItem value={"noakhali"}>Noakhali</SelectItem>
                      <SelectItem value={"coxbazar"}>Cox Bazar</SelectItem>
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
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full btn-primary"
            >
              <span className=" relative z-10">Add Car</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCar;
