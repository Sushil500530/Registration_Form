import { NavLink } from "react-router-dom";
import "./navber.css"
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
const Navber = () => {
    const [isActive, setIsActive] = useState(false)

    console.log(isActive);
    return (
        <div className="nav-header container">
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
                {
                    isActive === true && <div className="animation">
                        <ul className="list-item-small">
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
                }
                <label onClick={() => setIsActive(!isActive)}>
                    {
                        isActive === true ? <RxCross2 className="menu-icon2 menu-icon" /> : <IoMenuOutline className="menu-icon" />
                    }
                </label>
            </div>
        </div>
    );
};

export default Navber;