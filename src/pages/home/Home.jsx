import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.displayName);
    return (
        <div className="top">
            <h1>All Show Here.....!</h1>
        </div>
    );
};

export default Home;