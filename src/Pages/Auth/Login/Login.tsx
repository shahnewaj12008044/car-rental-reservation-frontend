/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/Auth/AuthApi";
import { setUser, TUser } from "@/redux/features/Auth/AuthSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/VerifyToken";

import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [showPassword, setShowPasword] = useState(false);
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate();


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    try{
        const userInfo = {
            email:data?.email,
            password:data?.password
        }
        const res = await login(userInfo).unwrap()
        // console.log(res)
        const user = verifyToken(res?.token) as TUser;
        //setting the user to the state
        dispatch(setUser({user:user,token:res?.token}))
        toast.success('Logged in successfully! 😍');
      navigate(`/${user?.role}/dashboard`);
    }catch(err : any){
      
        toast.error(err?.data?.message || 'Failed to login. Please try again.')
    }
  };
  return (
    <div className="max-w-md flex flex-col justify-center mx-auto my-20 bg-white px-8 py-16 rounded-md shadow-md shadow-orange-200">
      <h1 className="text-xl font-bold text-[#020C29] text-center">Welcome</h1>
      <p className="text-orange-500 text-center">Please singin</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Name</Label>
          <Input
            type="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && typeof errors.email.message === "string" && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="relative">
          <Label>Password</Label>
          <Input
            className=""
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "password  is required",
            })}
          />
          {errors.password && typeof errors.password.message === "string" && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <p
            className="absolute top-1/2 right-2 "
            onClick={() => setShowPasword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </p>
        </div>
        <small className="text-sm text-red-800 my-4">Forgot Password?</small>
        <Button type="submit" className="w-full mt-2 btn-primary">
          Login
        </Button>
      </form>
      <div className="text-sm text-center mt-4">
        <h2>
          Don't have an account yet?{" "}
        <Link to = '/register'>  <span className="text-orange-600 ">sign-up</span></Link>
        </h2>
      
      </div>
      <small className="text-orange-500 text-xs mt-2 text-center">Privacy policy | Terms and Conditions</small>
    </div>
  );
};

export default Login;
