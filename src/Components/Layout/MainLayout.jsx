import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Ui from "../Body/Ui";
import Recent from "../Recent works/Recent";
import Accordion from "../Accordion/Accordion";


const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <Ui></Ui>
            <Recent></Recent>
            <Accordion></Accordion>
        </div>
    );
};

export default MainLayout;