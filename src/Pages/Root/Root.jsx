import {Outlet} from "react";
import Navbar from "../../Components/Navbar/Navbar"
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;