import Lottie from "lottie-react";
import Swal from 'sweetalert2'
import registerLottie from "../assets/Lottie/Register.json"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (passwordRegex.test(password)) {
            createUser(email, password)
                .then(res => {
                    console.log(res.user)
                })
                .catch(err => console.log(err.message))

            Swal.fire({
                icon: "success",
                title: "Successfully",
                text: "Registered"
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must include an uppercase and a lowercase character"
            });

            e.target.reset();
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottie}>
                    </Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className=" ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="divider divider-info"></div>
                    <p>Already have an Account <span><Link to="/login">Log in</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;