import {RouterProvider, createBrowserRouter} from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AppStructure from "./components/AppStructure";
import Cart from "./pages/cart/Cart";
import HomeStructure from "./pages/home/HomeStructure";
import DynamicCollectionsHome from "./pages/collections/DynamicCollectionsHome";
import Profile from "./pages/profile/Profile";
import MyOrders from "./pages/profile/MyOrders";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import DeliveryAddress from "./pages/profile/DeliveryAddress";
import LoyaltyProgramm from "./pages/profile/LoyaltyProgramm";
import GiftCards from "./pages/profile/GiftCards";
import OrderHistoryInfo from "./pages/profile/OrderHistoryInfo";
import UserProfile from "./pages/profile/UserProfile";
import Products from "./pages/products/Products";
import Checkout from "./pages/checkout/Checkout";
import PaymentVerify from "./pages/checkout/PaymentVerify";
import PrivateRoute from "./routes/PrivateRoute";
import Verify from "./pages/auth/Verify";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";

const App = () => {
    
    const router = createBrowserRouter([
        {
            path: "",
            errorElement: <ErrorPage />,
            element: <AppStructure />,
            children: [
                {
                    path: "",
                    element: <HomeStructure />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
                {
                    path: "checkout",
                    element: <Checkout />,
                },
                {
                    path: "payment-verify",
                    element: <PaymentVerify />,
                },
                {
                    path: "wishlist",
                    element: <Wishlist />,
                },
                {
                    path: "search/:q?",
                    element: <Search />,
                },
                {
                    path: "collections/:slug",
                    element: <DynamicCollectionsHome />,
                },
                {
                    path: "my-order/:slug",
                    element: <OrderHistoryInfo />,
                },
                {
                    path: "products/:slug",
                    element: <Products />,
                },
                {
                    path: "account",
                    element: (
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    ),
                    children: [
                        {
                            path: "my-orders",
                            element: <MyOrders />,
                        },
                        {
                            path: "user-profile",
                            element: <UserProfile />,
                        },
                        {
                            path: "my-delivery-address",
                            element: <DeliveryAddress />,
                        },
                        {
                            path: "loyalty-program",
                            element: <LoyaltyProgramm />,
                        },
                        {
                            path: "gift-card",
                            element: <GiftCards />,
                        },
                    ],
                },
            ],
        },
        {
            path: "/register",
            errorElement: <ErrorPage />,
            element: <Register />,
        },
        {
            path: "/login",
            errorElement: <ErrorPage />,
            element: <Login />,
        },
        {
            path: "/forget-password",
            errorElement: <ErrorPage />,
            element: <ForgetPassword />,
        },
        {
            path: "/reset-password/:token",
            errorElement: <ErrorPage />,
            element: <ResetPassword />,
        },
        {
            path: "/verify/:token",
            errorElement: <ErrorPage />,
            element: <Verify />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
