import { FcGoogle } from "react-icons/fc";
import "./socialAccount.css"
// eslint-disable-next-line react/prop-types
const SocialAccount = ({ handleGoogleSignIn, name }) => {
    return (
        <>
            <div onClick={handleGoogleSignIn} className="social">
                <h1 className="social-acc"><FcGoogle></FcGoogle> <span className="social-text">{name}</span></h1>
            </div>
        </>
    );
};

export default SocialAccount;