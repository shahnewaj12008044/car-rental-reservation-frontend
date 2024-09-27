import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

const SearchBar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { handleSubmit, control } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    console.log(formData);
  };

  return (
    <div className="px-4 relative -top-6 bottom-0">
      <div className="bg-black bg-opacity-50 p-4 sm:p-6 shadow-lg rounded-lg mx-auto w-full max-w-lg sm:max-w-4xl sm:-z-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
            <div className="flex-1 flex flex-col w-full md:w-80 justify-center items-center mx-auto">
              <label
                className="block text-white font-bold mb-2 text-center"
                htmlFor="location"
              >
                Location
              </label>

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
            <div className="flex-1 flex flex-col mx-auto ">
              <label
                className="block text-white font-bold mb-2 text-center"
                htmlFor="pickup-date"
              >
                Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center justify-center mx-auto mt-5 sm:justify-start ">
              <Button
                type="submit"
                className="btn-primary"        >
                <span className=" relative z-10">Search</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
