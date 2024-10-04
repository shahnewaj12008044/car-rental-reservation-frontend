import { logout, TUser, useCurrentToken } from "@/redux/features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/VerifyToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children,role}: {children:ReactNode, role:string | undefined}) => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(useCurrentToken)
    let user;
    if(token){
        user = verifyToken(token) as TUser;
    }
    if(role !== undefined && role!== user?.role){
        dispatch(logout())
        return <Navigate to="/login" replace={true} />;
    }
    if (!token) {
        return <Navigate to="/login" replace={true} />;
      }

  return children
};

export default ProtectedRoute;