import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";


const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;