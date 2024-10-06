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
import Register from "@/Pages/Auth/Register/Register";
import CarDetails from "@/Pages/Cars/CarDetails";
import UserDashboard from "@/Pages/Dashboard/user/UserDashboard";
import BookingForm from "@/Pages/Booking/BookingForm";
import ConfirmBooking from "@/Pages/Booking/ConfirmBooking";
import Success from "@/Pages/success/Success";
import BookingManagement from "@/Pages/Dashboard/user/bookingmanagement/BookingManagement";


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
        path: "/booking-form/:id",
        element: (
          <ProtectedRoute roles={[ "user"]}>
            <BookingForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/confirm-booking",
        element: <ProtectedRoute roles={['user']}><ConfirmBooking /></ProtectedRoute>,
      },
      {
        path: "/success",
        element: <ProtectedRoute roles={['user','admin']}><Success  /></ProtectedRoute>,
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
    element: (
      <ProtectedRoute roles={["user"]}>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "booking-management",
        element: <BookingManagement />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute roles={["admin"]}>
       <App></App>
      </ProtectedRoute>
    ),
    children:[
      {
        path:'dashboard',
        element:<AdminDashboard></AdminDashboard>
      }
    ]
  },
]);

export default router;
