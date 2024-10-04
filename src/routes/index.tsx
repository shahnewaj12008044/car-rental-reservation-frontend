import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/Home/Home";
import Contact from "@/Pages/Contact/Contact";
import Booking from "@/Pages/Booking/Booking";
import Cars from "@/Pages/Cars/Cars";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import Login from "@/Pages/Auth/Login/Login";
import ProtectedRoute from "@/components/shared/ProtectedRoute";
import AdminDashboard from "@/Pages/Dashboard/admin/AdminDashboard";
import Register from "@/Pages/Register/Register";
import CarDetails from "@/Pages/Cars/CarDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/carList",
        element: <Cars></Cars>,
      },
      {
        path: "/car-details/:id",
        element: <CarDetails />,
      },
      {
        path: "/booking",
        element: (
          <ProtectedRoute roles={["admin", "user"]}>
            <Booking />
          </ProtectedRoute>
        ),
      },
      
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/user",
    element: <ProtectedRoute roles={["user"]}><App/></ProtectedRoute>,
  },
  {
    path:'/admin',
    element:<ProtectedRoute roles={["admin"]}><AdminDashboard></AdminDashboard></ProtectedRoute>
  }
]);

export default router;
