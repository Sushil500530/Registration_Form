import { NavLink } from "react-router-dom";
import "./navber.css"
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from './../providers/AuthProvider';
import toast from "react-hot-toast";
const Navber = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false);
    // console.log(user);
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("logout successfully...!")
            })
    }
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

                        {
                            user?.email ? <>
                                <h1 className="profile-name">{user?.displayName}</h1>
                                <div className="user-profile-header">
                                    <div className="profile-image">
                                        <img src={user?.photoURL} alt="user-img" />
                                    </div>
                                    <div className="profile-content">
                                        <button className="profile-item">Profile</button>
                                        <button onClick={handleLogout} className="profile-item logout-btn">Logout</button>
                                    </div>
                                </div>

                            </> : <>
                                <NavLink to="/login" className={({ isActive }) =>
                                    isActive ? "active" : ""}>
                                    Login
                                </NavLink>
                                <NavLink to="/register" className={({ isActive }) =>
                                    isActive ? "active" : ""}>
                                    Register
                                </NavLink>
                            </>
                        }

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
                            {
                                user?.email ? <>
                                    <h1 className="profile-name">{user?.displayName}</h1>
                                    <div className="user-profile-header">
                                        <div className="profile-image">
                                            <img src={user?.photoURL} alt="user-img" />
                                        </div>
                                        <div className="profile-content">
                                            <button className="profile-item">Profile</button>
                                            <button onClick={handleLogout} className="profile-item logout-btn">Logout</button>
                                        </div>
                                    </div>

                                </> : <>
                                    <NavLink to="/login" className={({ isActive }) =>
                                        isActive ? "active" : ""}>
                                        Login
                                    </NavLink>
                                    <NavLink to="/register" className={({ isActive }) =>
                                        isActive ? "active" : ""}>
                                        Register
                                    </NavLink>
                                </>
                            }
                        </ul>
                    </div>
                }
                <label onClick={() => setIsActive(!isActive)}>
                    {
                        isActive === true ? <RxCross2 className="menu-icon" /> : <IoMenuOutline className="menu-icon" />
                    }
                </label>
            </div>
        </div>
    );
};

export default Navber;