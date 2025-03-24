import {Navigate} from "react-router-dom";


const UserRoute = ({element, children}) => {
    const isUser = true;
    const isLoggedIn = "yes";

    return isUser && isLoggedIn ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/" replace />
    );
};

export default UserRoute;
