import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function MainLayout(){


    return (<>

<Navbar/>  {/* this is the common component for all the pages */}
<Outlet/>  {/* ate actual page content will be rendered here */ }










    </>) }


export default MainLayout;