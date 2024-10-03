import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/Home/Home";
import Contact from "@/Pages/Contact/Contact";
import Booking from "@/Pages/Booking/Booking";
import Cars from "@/Pages/Cars/Cars";
import AboutUs from "@/Pages/AboutUs/AboutUs";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/carList',
        element:<Cars></Cars>
      },
      {
        path:'/booking',
        element:<Booking></Booking>
      },
      {
        path:'about',
        element:<AboutUs />
      }


    ]
  }
]);

export default router;
