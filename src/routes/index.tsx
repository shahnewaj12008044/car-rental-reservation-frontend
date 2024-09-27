import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/Home/Home";
import Contact from "@/Pages/Contact/Contact";
import Booking from "@/Pages/Booking/Booking";
import About from "@/Pages/About us/About";

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
        path:'/booking',
        element:<Booking></Booking>
      },
      {
        path:'about',
        element:<About></About>
      }


    ]
  }
]);

export default router;
