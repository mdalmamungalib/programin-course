import Main from "../Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import SingUp from "../Pages/SingUp/SingUp";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/courses",
                element: <PrivetRoute>
                    <Courses></Courses>
                </PrivetRoute>,
            },
            {
                path: "/singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/profile",
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            },
        ]
    }
])