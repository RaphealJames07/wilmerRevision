import {
    CiBoxes,
    CiBoxList,
    CiCreditCard1,
    CiLogout,
    CiMenuBurger,
    CiStar,
} from "react-icons/ci";
import {NavLink, Outlet} from "react-router";
import {PiUserCircleThin} from "react-icons/pi";
import {Drawer} from "antd";
import {useState} from "react";

const Profile = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="w-full h-max flex phone:flex-col phone:gap-2 phone:mt-16 pt-10 px-6 phone:px-2 phone:pt-0">
            <div
                className="w-max h-max phone:flex hidden items-center text-sm gap-2 cursor-pointer"
                onClick={() => setOpenMenu(true)}
            >
                <CiMenuBurger size={25} />
                Profile menu
            </div>
            <div className="w-[25%] phone:hidden h-max flex flex-col gap-6">
                <div className="w-full h-max flex gap-3">
                    <img src="Logo" alt="Logo" />
                    <p className="w-max h-max flex flex-col text-2xl font-medium">
                        Welcome <span>Rapheal</span>
                    </p>
                </div>
                <div className="w-full h-max flex flex-col gap-4 text-sm">
                    <NavLink
                        to={`/account/my-orders`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiBoxList size={24} />
                            My Orders
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/user-profile`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <PiUserCircleThin size={24} />
                            My Profile
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/my-delivery-address`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiBoxes size={24} />
                            My delivery address
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/loyalty-program`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiStar size={24} />
                            Loyalty program
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/account/gift-card`}
                        className={({isActive}) =>
                            !isActive
                                ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                        }
                    >
                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiCreditCard1 size={24} />
                            Gift card
                        </div>
                    </NavLink>

                    <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                        <CiLogout size={24} />
                        Logout
                    </div>
                </div>
            </div>
            <div className="w-[75%] phone:w-full h-max">
                <Outlet />
            </div>
            <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                placement="left"
                maskClosable
                closeIcon={false}
                className="w-full h-max"
            >
                <div className="w-full h-max flex flex-col gap-6">
                    <div className="w-full h-max flex gap-3">
                        <img src="Logo" alt="Logo" />
                        <p className="w-max h-max flex flex-col text-2xl font-medium">
                            Welcome <span>Rapheal</span>
                        </p>
                    </div>
                    <div className="w-full h-max flex flex-col gap-4 text-sm">
                        <NavLink
                            to={`/account/my-orders`}
                            className={({isActive}) =>
                                !isActive
                                    ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                    : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                            }
                            onClick={() => setOpenMenu(false)}
                        >
                            <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                                <CiBoxList size={24} />
                                My Orders
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/account/my-profile`}
                            className={({isActive}) =>
                                !isActive
                                    ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                    : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                            }
                            onClick={() => setOpenMenu(false)}
                        >
                            <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                                <PiUserCircleThin size={24} />
                                My Profile
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/account/my-delivery-address`}
                            className={({isActive}) =>
                                !isActive
                                    ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                    : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                            }
                            onClick={() => setOpenMenu(false)}
                        >
                            <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                                <CiBoxes size={24} />
                                My delivery address
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/account/loyalty-program`}
                            className={({isActive}) =>
                                !isActive
                                    ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                    : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                            }
                            onClick={() => setOpenMenu(false)}
                        >
                            <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                                <CiStar size={24} />
                                Loyalty program
                            </div>
                        </NavLink>
                        <NavLink
                            to={`/account/gift-card`}
                            className={({isActive}) =>
                                !isActive
                                    ? "w-full bg-none flex transition-all duration-300 hover:bg-gray-100 items-center h-max "
                                    : "w-full text-primary-yellow bg-gray-100 h-max flex transition-all duration-300 "
                            }
                            onClick={() => setOpenMenu(false)}
                        >
                            <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                                <CiCreditCard1 size={24} />
                                Gift card
                            </div>
                        </NavLink>

                        <div className="w-full h-12 flex gap-4 items-center pl-6 rounded cursor-pointer">
                            <CiLogout size={24} />
                            Logout
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Profile;
