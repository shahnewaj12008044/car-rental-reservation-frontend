/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSignupMutation } from "@/redux/features/Auth/AuthApi";

import { useState } from "react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
interface AddUserProps {
    refetch: () => Promise<any>; 
  }
const AddUser = ({refetch}: AddUserProps) => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, reset, control } = useForm();

  
    const [createUser] = useSignupMutation()


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
            address:data.address,
            phone:data.phone,
           }
           const res = await createUser(userData)
           if(res?.data?.success) {
             toast.success("Created user successfully! 😍");
             reset()
             setOpen(false);
             refetch()
           }else{
             toast.error("Failed to create user. Please try again later. 🥲");
           }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="btn-primary"
        >
          <span className=" relative z-10">Add User</span>
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
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
            type="email"
            {...register("email")}
            className=" col-span-3"
          />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              address
            </Label>
            <Input
            type="text"
            {...register("address")}
            className=" col-span-3"
          />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              phone
            </Label>
            <Input
            type="phone"
            {...register("phone")}
            className=" col-span-3"
          />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Passowrd
            </Label>
            <Input
            type="password"
            {...register("password")}
            className=" col-span-3"></Input>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Role
            </Label>
            <Controller
              name="role"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className=" col-span-3 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={"user"}>User</SelectItem>
                      <SelectItem value={"admin"}>Admin</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          
          <DialogFooter>
            <Button
              type="submit"
              className="w-full btn-primary"
            >
              <span className=" relative z-10">Add User</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    );
};

export default AddUser;