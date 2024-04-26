import { useContext, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialAccount from "../../components/shared/SocialAccount";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { loginUser, user, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({
        username: "",
        email: "",
        password: ""

    })
    const fullname = currentUser?.username?.length;
    const emailLength = currentUser?.email?.length;
    const pass = currentUser?.password?.length;
    console.log(user?.email);

    const handleLogin = async () => {
        console.log(user);
        setIsLoading(true);
        // if (user?.displayName !== currentUser.username) {
        //     setIsLoading(false)
        //     return toast.error("invalid username....!")
        // }
        if (fullname > 0 && emailLength > 0 && pass > 0) {
            if (user?.email || currentUser?.email) {
                return await loginUser(currentUser?.email, currentUser?.password)
                    .then(res => {
                        if (res.user) {
                            console.log(res.user);
                            toast.success('Logged in successfully');
                            setIsLoading(false)
                            return navigate('/')
                        }

                    })
                    .catch(error => {
                        setIsLoading(false)
                        console.log(error.message);
                        // toast.error(error.message)
                        toast.error("invalid password....!")
                    }
                    )
            } else {
                setIsLoading(false)
                return toast.error("invalid email address....!")
            }
        } else {
            setIsLoading(false)
            return toast.error("Please fill in the all input field...!")
        }
    }

    const handleGoogleSignIn = () => {
        setIsLoading(true)
        googleSignIn()
            .then(res => {
                console.log(res.user);
                toast.success('Login Successfull...!')
                setIsLoading(false)
                return navigate("/");

            })
            .catch(error => {
                setIsLoading(false)
                toast.error(error.message)
            })
    }


    return (
        <div className="register-header">
            <h1>Register Now!</h1>
            <div className="register-content">
                <div className="content">
                    <label htmlFor="firstname">Full Name*</label> <br />
                    <input type="text" value={currentUser.username} onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })} placeholder="Enter your full-name..." />
                </div>
                <div className="content">
                    <label htmlFor="email">Email*</label> <br />
                    <input type="email" value={currentUser.email} onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} placeholder="Enter your email..." />
                </div>
                <div className="content">
                    <label htmlFor="password">Password*</label> <br />
                    <input type="password" value={currentUser.password} onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })} placeholder="Enter your password..." />
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
                <p className="p">Don&apos;t have an account yet?{' '} Please <Link to='/register' className="link-account">Sign up</Link></p>
                <div className="or-text">Or</div>
                <SocialAccount handleGoogleSignIn={handleGoogleSignIn} name={'Sign in With Google'} />
            </div>
        </div>
    );
};

export default Login;