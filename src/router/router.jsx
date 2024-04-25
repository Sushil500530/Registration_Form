import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <h1>Home</h1>
        },
        {
            path: "/login",
            element: <h1>Login</h1>
        },
        {
            path: "/register",
            element: <h1>Register</h1>
        }
    ]

}])

export default router;