import { Link, NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <ul className="list-item">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active" : ""}>
                        Home
                    </NavLink>
                    <NavLink to="/" className={({ isActive }) =>
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
    );
};

export default Navber;