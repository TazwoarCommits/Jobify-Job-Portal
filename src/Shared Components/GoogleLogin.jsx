import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const GoogleLogin = () => {
    
    const {googleLogin} = useContext(AuthContext) ;
    const navigate = useNavigate() ;

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider ;
        googleLogin(provider)
        .then(res => toast.success(`Successfully Logged in With ${res.user.email}`))
        .catch(err => toast.error(`${err.message}`))
        navigate("/") ;
    }

    return (
        <button className="btn bg-blue-600 hover:bg-blue-700 flex justify-center items-center gap-2 text-white text-xl lg:text-2xl font-bold w-full px-3 py-2 rounded-lg"
        onClick={handleGoogleLogin}>
        <span className="text-blue-900"><FaGoogle></FaGoogle>
        </span>Login with Google</button>
    );
};

export default GoogleLogin;