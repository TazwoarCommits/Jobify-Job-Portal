import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loginLottie from "../assets/Lottie/Login.json"
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Shared Components/GoogleLogin";

const Login = () => {
    const {logInUser}=useContext(AuthContext) ;
    const navigate = useNavigate() ;
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        logInUser(email , password)
        .then(res => {
            // console.log(res.user)
            toast.success(`Successfully Logged in with ${res.user.email}`) ;
            navigate("/")
        })
        .catch(err => toast.error(err.message))

        e.target.reset();
    } 

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottie}>
                    </Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className=" ml-8 mt-4 text-5xl font-bold">Log in</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password (at least 6 characters)" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider divider-info"></div>
                    <div>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    <p className="mx-4 my-4">Don&apos;t have an Account??? <span><Link to="/register">Register Now</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;