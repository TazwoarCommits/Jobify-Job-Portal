import { Outlet } from "react-router-dom";
import Navbar from "../Shared Components/Navbar";
import Footer from "../Shared Components/Footer";

const Mainlayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;