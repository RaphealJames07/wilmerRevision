import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./auth/Login";
import Home from "./pages/Home";
import Signin from "./auth/Signin";
import Verify from "./auth/Verify";
import HomeRoute from "./routes/HomeRoute";
import ProductDetailPage from "./pages/ProductDetailPage";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import Collections from "./pages/Collections";
import About from "./pages/About";
const App = () => {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <HomeRoute />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "/cart",
                    element: <Home />,
                },
                {
                    path: "/collections",
                    element: <Collections />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/shop",
                    element: <Shop />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
                },
                {
                    path: "/favorites",
                    element: <Favorites />,
                },
                {
                    path: "/product-detail/:id",
                    element: <ProductDetailPage />,
                },
            ],
        },
        {
            path: "/verify",
            element: <Verify />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signin />,
        },
    ]);

    return <RouterProvider router={routes} />;
};

export default App;
