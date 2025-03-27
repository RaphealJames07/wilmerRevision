import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router";
import Profile from "../pages/profile/Profile";
// Outlet

const PrivateRoute = () => {
    const user = useSelector((state) => state.userToken);
    console.log(user);
    return user ? <Profile /> : <Navigate replace to={"/login"} />;
};

export default PrivateRoute;
