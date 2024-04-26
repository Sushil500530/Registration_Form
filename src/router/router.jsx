import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Service from './../pages/service/Service';
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([{
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "service",
            element: <Service />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        }
    ]

}])

export default router;