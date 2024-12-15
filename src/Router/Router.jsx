import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement : <h2>Something Went Wrong</h2> ,
      element: <Mainlayout></Mainlayout>,
      children : [
        {
            path : "/" ,
            element : <Home></Home>,
        },
        {
           path : "/register",
           element : <Register></Register>
        },
        {
          path : "/logIn",
          element : <Login></Login>
        }
      ]
    },
  ]);

  export default router