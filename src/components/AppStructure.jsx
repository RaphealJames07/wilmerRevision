import {Outlet} from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const AppStructure = () => {
    return (
        <div className="w-full h-max">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default AppStructure;
