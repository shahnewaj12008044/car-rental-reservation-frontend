import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { selectCurrentUser } from "@/redux/features/Auth/AuthSlice";
import { useUpdateMyProfileMutation } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";


export function UpadateProfile() {
    const user  = useAppSelector(selectCurrentUser) ;
 
    const {register,handleSubmit} = useForm()
    const [updateProfile] = useUpdateMyProfileMutation()

    const onSubmit : SubmitHandler<FieldValues> = async(data) =>{
       try{
        const userDataPayload = {
            id:user?.userId,
            userData:data,
        }
        const res = await updateProfile(userDataPayload)
        // console.log(res)
        toast.success(res.data.message)
       }catch(err){
        console.log(err)
       }
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="btn-primary"><span className="px-4 py-2"><FaEdit /></span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue=""
              {...register("name")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">
             email
            </Label>
            <Input
              id="email"
              {...register("email")}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              phone
            </Label>
            <Input
              id="phone"
              {...register("phone")}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">
              address
            </Label>
            <Input
             id="address"
              {...register("address")}
             
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter >
        <DialogClose asChild>
          <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
