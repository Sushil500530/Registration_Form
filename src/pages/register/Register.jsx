import { useContext, useState } from "react";
import "./register.css"
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser,upadatedProfile } = useContext(AuthContext);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleResister = async (user) => {
        
        createUser(user?.email, user?.password)
            .then((result) => {
                if (result?.user) {
                    upadatedProfile(user?.username)
                        .then(() => { })
                    toast.success('Login Successful')
                    navigate("/")
                }
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div className="register-header">
            <h1>Register Now!</h1>
            <div className="register-content">
                <div className="content">
                    <label htmlFor="username">Username*</label> <br />
                    <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="Enter your username..." />
                </div>
                <div className="content">
                    <label htmlFor="email">Email*</label> <br />
                    <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Enter your email..." />
                </div>
                <div className="content">
                    <label htmlFor="username">Password*</label> <br />
                    <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Enter your password..." />
                </div>
                <div onClick={handleResister} className="btn-content btn">
                    <button className="">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Register;