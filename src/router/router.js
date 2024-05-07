import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Dashboard />)
    },
    {
        path: "/login",
        element: (<Login />)
    },
    {
        path: "/register",
        element: (<Register />)
    },
    
])

export default router