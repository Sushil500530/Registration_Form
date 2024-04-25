import "./register.css"
const Register = () => {
    return (
        <div className="register-header">
            <h1>Register Now!</h1>
            <div className="register-content">
                <div className="content">
                    <label htmlFor="username">Username*</label> <br />
                    <input type="text" placeholder="Enter your name..." />
                </div>
                <div className="content">
                    <label htmlFor="username">Email*</label> <br />
                    <input type="text" placeholder="Enter your email..." />
                </div>
                <div className="content">
                    <label htmlFor="username">Password*</label> <br />
                    <input type="text" placeholder="Enter your password..." />
                </div>
                <div className="btn-content btn">
                  <button className="">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Register;