import {Outlet} from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar"
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Root;