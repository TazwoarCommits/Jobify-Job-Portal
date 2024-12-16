import { easeOut } from "motion";
import { motion } from "motion/react"
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
const HomeBanner = () => {
    return (
        <div className="hero bg-base-200 h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={banner1}
                        animate={{ y: [0, 50, 0] }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="max-w-sm w-64 rounded-t-3xl rounded-r-3xl border-l-8 border-b-8 border-b-blue-800 border-l-blue-800  shadow-2xl" />
                    <motion.img
                        src={banner2}
                        animate={{ x: [80, 140, 80] }}
                        transition={{ repeat: Infinity, delay : 5 ,duration: 10 }}
                        className="max-w-sm w-64 rounded-t-3xl rounded-r-3xl border-l-8 border-b-8 border-b-blue-800 border-l-blue-800  shadow-2xl" />
                </div>
                <div className="flex-1">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ["#f0f01f", "#ef8256", "#56efe6"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >Jobs</motion.span> for You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;