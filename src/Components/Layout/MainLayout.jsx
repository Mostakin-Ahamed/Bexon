import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Ui from "../Body/Ui";


const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <Ui></Ui>
        </div>
    );
};

export default MainLayout;