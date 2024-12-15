import { Outlet } from "react-router-dom";
import Navbar from "../Shared Components/Navbar";

const Mainlayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;