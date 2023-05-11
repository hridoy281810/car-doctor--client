import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
   path:'login',
   element:<Login></Login>
        },
        {
   path:'signup',
   element:<SignUp></SignUp>
        },
        {
   path:'book/:id',
   element:<PrivetRoute><BookService></BookService></PrivetRoute>,
   loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        
        {
   path:'bookings',
   element:<PrivetRoute><Bookings></Bookings></PrivetRoute>
 },
        
      ],
    },
  ]);

  export default router;