import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "service",
            element: <Home />
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