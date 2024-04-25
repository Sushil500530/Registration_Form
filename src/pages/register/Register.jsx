import { useContext, useState } from "react";
import "./register.css"
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { createUser, upadatedProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const name = user.username?.length;
    const emai = user.email?.length;
    const pass = user.password?.length;

    const handleResister = async () => {
        const emailVerification = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user?.email))
        if (name > 0 && emai > 0 && pass > 0) {
            if (emailVerification === true) {

                return await createUser(user?.email, user?.password)
                    .then((result) => {
                        if (result?.user) {
                            upadatedProfile(user?.username)
                                .then(() => { })
                            console.log(result?.user?.displayName);
                            console.log(result?.user?.email);
                            console.log(result?.user?.emailVerified);
                            toast.success('login successfully....!');
                            // navigate("/")
                        }
                    })
                    .catch(err => toast.error(err.message))
            } else {

                return toast.error("please enter your valid email.....!")
            }

        }
        return toast.error("Please fill in the all input field...!")
        // console.log(emailVerification, "-----?> value");
        // console.log(name, "-----?> value");




        //  toast.error("You have entered an invalid email address!")

        //   await createUser(user?.email, user?.password)
        //         .then((result) => {
        //             if (result?.user) {
        //                upadatedProfile(user?.username)
        //                     .then(() => { })
        //                 toast.success('Login Successful')
        //                 // navigate("/")
        //             }
        //         })
        //         .catch(err => toast.error(err.message))
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
                <div className="btn-content">
                    <button onClick={handleResister} className="btn">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Register;