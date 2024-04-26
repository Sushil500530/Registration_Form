import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""

    })

    const handleLogin = async () => {
        setIsLoading(true);
        console.log(user);
    }
    return (
        <div className="register-header">
            <h1>Register Now!</h1>
            <div className="register-content">
                <div className="content">
                    <label htmlFor="firstname">Full Name*</label> <br />
                    <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="Enter your full-name..." />
                </div>
                <div className="content">
                    <label htmlFor="email">Email*</label> <br />
                    <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Enter your email..." />
                </div>
                <div className="content">
                    <label htmlFor="password">Password*</label> <br />
                    <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Enter your password..." />
                </div>
                <div className="btn-content">
                    <button onClick={handleLogin} className="btn">
                        {
                            isLoading ? (
                                <span className='spinner-header'> <FaSpinner className='m-auto animate' size={24} /> Processing....</span>
                            ) : (
                                'Register'
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;