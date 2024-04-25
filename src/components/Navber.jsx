import { NavLink } from "react-router-dom";
import "./navber.css"

const Navber = () => {
    return (
        <div className="nav-header">
            <div className="logo">
                <h1 className="logo-text">Fav-Form</h1>
            </div>
            <div className="navbar">
                <div className="navber-header">
                    <ul className="list-item">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                            Home
                        </NavLink>
                        <NavLink to="/service" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                            Service
                        </NavLink>
                        <NavLink to="/login" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                            Login
                        </NavLink>
                        <NavLink to="/register" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                            Register
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;