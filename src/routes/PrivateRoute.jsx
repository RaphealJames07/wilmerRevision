import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router";
// Outlet

const PrivateRoute = () => {
    const user = useSelector((state) => state.userToken);
    console.log(user);
    return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default PrivateRoute;
