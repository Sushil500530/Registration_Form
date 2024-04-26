import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    // console.log(user);
    if(!user){
        return navigate('/register')
    }
    return (
        <div className="top">
            <h1>All Show Here.....!</h1>
        </div>
    );
};

export default Home;