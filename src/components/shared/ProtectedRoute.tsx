import { logout, TUser, useCurrentToken } from "@/redux/features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/VerifyToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  roles: string[]; // Now accepts an array of roles
}

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  let user: TUser | undefined;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  // Check if user role is allowed
  if (roles.length && (!user || !roles.includes(user.role))) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
