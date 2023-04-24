import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import Login from "../component/Pages/Login/Login";
import Signup from "../component/Pages/Signup/Signup";
import Projects from "../component/Project/Projects";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../component/Pages/Dashboard/Dashboard"



export const router =createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/project',
            element:<Projects></Projects>
        },
      
    ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard>
        </PrivateRoute>
    }
])