// import { useLocation } from "react-router";
import logo from "../assets/logo1.png";
import {CiBag1, CiHeart, CiMenuBurger, CiSearch, CiUser} from "react-icons/ci";
import {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router";
import {Drawer} from "antd";
import {IoIosArrowRoundBack} from "react-icons/io";
import {TbLetterX} from "react-icons/tb";
import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import collections from "../assets/json/samplecollections.json";
import sneakerImg from "../assets/menuimgs/sneakerscoverimg.webp";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const Navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [menuSize, setMenuSize] = useState(320);
    const [openBrandDrawer, setOpenBrandDrawer] = useState(false);
    const [openFamilyDrawer, setOpenFamilyDrawer] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedFamily, setSelectedFamily] = useState([]);

    const handleOpenBrandDrawer = (brandData) => {
        setSelectedBrand(brandData);
        setOpenBrandDrawer(true);
    };
    const handleOpenFamilyDrawer = (familyData) => {
        setSelectedFamily(familyData);
        setOpenFamilyDrawer(true);
    };

    const closeAllDrawer = () => {
        setSelectedBrand(null);
        setSelectedFamily(null);
        setOpenBrandDrawer(false);
        setOpenFamilyDrawer(false);
        setOpenSideMenu(false);
    };

    const openSideMenuBig = () => {
        setMenuSize(400);
        setOpenSideMenu(true);
    };
    const openSideMenuSmall = () => {
        setMenuSize(320);
        setOpenSideMenu(true);
    };

    return (
        <>
            <div
                className={`w-full h-max z-50 relative ${
                    scrolled ? "mb-0 " : "mb-16 phone:mb-0"
                } `}
            >
                <div
                    className={`w-full  h-16 fixed top-0 left-0 flex items-center bg-white ${
                        scrolled ? "phone:opacity-100 " : "phone:bg-transparent"
                    } transition-all duration-500`}
                >
                    <div className="w-full h-full flex justify-between phone:items-center phone:justify-center  px-8">
                        <div className="w-max h-full flex items-center">
                            <NavLink to={"/"}>
                                <img
                                    src={logo}
                                    alt=""
                                    className="w-48 phone:w-32"
                                />
                            </NavLink>
                        </div>
                        <div className="w-max h-full flex items-center phone:hidden">
                            <ul className="w-max h-max flex list-none gap-6 text-sm">
                                <NavLink to={"/collections/all-sneakers"}>
                                    <li className="cursor-pointer transition-all duration-500 hover:text-gray-700 text-gray-500">
                                        Sneakers
                                    </li>
                                </NavLink>
                                <NavLink to={"/collections/all-shoes"}>
                                    <li className="cursor-pointer transition-all duration-500 hover:text-gray-700 text-gray-500">
                                        Shoes
                                    </li>
                                </NavLink>
                                <NavLink to={"/collections/streetwears"}>
                                    <li className="cursor-pointer transition-all duration-500 hover:text-gray-700 text-gray-500">
                                        Streetwear
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="w-max h-full flex items-center phone:hidden">
                            <div className="w-max h-10 border rounded border-gray-400 flex items-center px-2">
                                <input
                                    type="text"
                                    className="w-[30rem] rounded border-none outline-none "
                                    placeholder="search for a brand, a model..."
                                    onFocus={() => Navigate("/search")}
                                />
                                <CiSearch size={20} />
                            </div>
                        </div>
                        <div className="w-max h-full flex items-center gap-8 phone:hidden">
                            <div className="w-max h-max cursor-pointer">
                                <Link to={`/account/my-orders`}>
                                    <CiUser size={20} />
                                </Link>
                            </div>
                            <div className="w-max h-max cursor-pointer">
                                <Link to={`/wishlist`}>
                                    <CiHeart size={20} />
                                </Link>
                            </div>
                            <div className="w-max h-max cursor-pointer relative">
                                <Link to={`/cart`}>
                                    <CiBag1 size={20} />
                                    <span className="w-4 h-4 rounded-full text-[9px] bg-black text-white absolute -top-2 -right-2 flex items-center justify-center">
                                        1
                                    </span>
                                </Link>
                            </div>
                            <div className="w-max h-max cursor-pointer">
                                <CiMenuBurger
                                    size={20}
                                    onClick={openSideMenuBig}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed bottom-[2vh] left-0 w-full h-12 hidden phone:flex justify-center">
                    <div className="w-[85%] h-full flex items-center px-4 justify-between bg-white shadow-lg border border-gray-200 rounded-full">
                        <div className="w-[30%] h-max flex justify-between">
                            <div
                                className="w-max h-max cursor-pointer"
                                onClick={openSideMenuSmall}
                            >
                                <CiMenuBurger size={22} />
                            </div>

                            <div className="w-max h-max cursor-pointer">
                                <Link to={`/account/my-orders`}>
                                    <CiUser size={22} />
                                </Link>
                            </div>
                        </div>
                        <div className="w-[40%] h-full relative ">
                            <div className="absolute -top-3 right-[28%] bg-[#4956ed] w-12 h-12 rounded-full flex items-center justify-center">
                                <CiSearch size={24} className="text-white" />
                            </div>
                        </div>
                        <div className="w-[30%] h-max flex justify-between">
                            <div className="w-max h-max cursor-pointer">
                                <Link to={`/wishlist`}>
                                    <CiHeart size={22} />
                                </Link>
                            </div>

                            <div className="w-max h-max cursor-pointer relative">
                                <Link to={`/cart`}>
                                    <CiBag1 size={22} />
                                    <span className="w-4 h-4 rounded-full text-[9px] bg-black text-white absolute -top-2 -right-2 flex items-center justify-center">
                                        1
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer
                open={openSideMenu}
                onClose={() => setOpenSideMenu(false)}
                placement="right"
                maskClosable
                closeIcon={false}
                className="w-full h-max"
                width={menuSize}
            >
                <div className="w-full h-screen">
                    <>
                        <div className="w-full h-full flex flex-col relative">
                            <div className="w-full h-max ">
                                <div className="w-full h-12 flex items-center justify-between px-4">
                                    <div className="w-max h-max">
                                        <IoIosArrowRoundBack
                                            size={26}
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setOpenSideMenu(false)
                                            }
                                        />
                                    </div>
                                    <div className="w-max h-max">
                                        <NavLink to={"/"}>
                                            <img
                                                src={logo}
                                                className="w-32"
                                                alt="Elvis Scott Wears"
                                            />
                                        </NavLink>
                                    </div>
                                    <div className="w-max h-max">
                                        <TbLetterX
                                            size={15}
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setOpenSideMenu(false)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-10 flex justify-between items-center px-4 ">
                                    <p className="text-xl">Our products</p>
                                    <NavLink
                                        to={`/collections/${collections[0].slug}`}
                                        onClick={closeAllDrawer}
                                    >
                                        <p className="text-xs text-gray-600 underline cursor-pointer">
                                            View all
                                        </p>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="w-full h-[clac(100%-5.5rem)] overflow-y-auto pt-4 ">
                                <div className="w-full h-max flex flex-col gap-2 ">
                                    {collections.map((item, index) =>
                                        item.brand ? (
                                            <div
                                                className="w-full h-12 border-b border-b-gray-300 flex items-center px-4 p-1 gap-4 cursor-pointer"
                                                key={index}
                                                onClick={() =>
                                                    handleOpenBrandDrawer(item)
                                                }
                                            >
                                                <div className="w-full h-full flex items-center gap-4">
                                                    <div className="w-12 h-full border border-gray-300">
                                                        <img
                                                            src={sneakerImg}
                                                            alt=""
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <p>{item?.name}</p>
                                                </div>
                                                {item.brand ? (
                                                    <GoChevronRight
                                                        className="cursor-pointer"
                                                        size={24}
                                                    />
                                                ) : null}
                                            </div>
                                        ) : (
                                            <NavLink
                                                to={`/collections/${item.slug}`}
                                                className="w-full h-12 border-b border-b-gray-300 flex items-center px-4 p-1 gap-4"
                                                key={index}
                                                onClick={closeAllDrawer}
                                            >
                                                <div className="w-full h-full flex items-center gap-4">
                                                    <div className="w-12 h-full border border-gray-300">
                                                        <img
                                                            src={sneakerImg}
                                                            alt=""
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <p>{item?.name}</p>
                                                </div>
                                                {item.brand ? (
                                                    <GoChevronRight
                                                        className="cursor-pointer"
                                                        size={24}
                                                    />
                                                ) : null}
                                            </NavLink>
                                        )
                                    )}
                                    {selectedBrand && (
                                        <Drawer
                                            open={openBrandDrawer}
                                            onClose={() =>
                                                setOpenBrandDrawer(false)
                                            }
                                            placement="right"
                                            maskClosable
                                            closeIcon={false}
                                            className="w-full h-max"
                                            width={menuSize}
                                        >
                                            <div className="w-full h-max">
                                                <div className="w-full h-52  relative ">
                                                    <div className="w-full h-max flex justify-between absolute top-0 left-0 px-4 pt-2">
                                                        <div className="w-max h-max flex items-center gap-4">
                                                            {" "}
                                                            <GoChevronLeft
                                                                size={20}
                                                                className="cursor-pointer"
                                                                onClick={() =>
                                                                    setOpenBrandDrawer(
                                                                        false
                                                                    )
                                                                }
                                                            />
                                                            <p>Our products</p>
                                                        </div>
                                                        <p
                                                            className="text-lg cursor-pointer"
                                                            onClick={
                                                                closeAllDrawer
                                                            }
                                                        >
                                                            X
                                                        </p>
                                                    </div>
                                                    <img
                                                        src={sneakerImg}
                                                        className="w-full h-full object-cover"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="w-full h-max">
                                                    <div className="w-full h-max flex items-center justify-between p-3">
                                                        <p className="text-lg">
                                                            {
                                                                selectedBrand?.name
                                                            }
                                                        </p>
                                                        <NavLink
                                                            to={`/collections/${selectedBrand?.slug}`}
                                                            onClick={
                                                                closeAllDrawer
                                                            }
                                                        >
                                                            <p className="underline text-xs">
                                                                View all
                                                            </p>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                                <div className="w-full h-max flex flex-col px-4">
                                                    {selectedBrand?.brand?.map(
                                                        (item, index) =>
                                                            item?.family ? (
                                                                <div
                                                                    className="w-full h-16 flex justify-between items-center border-b border-b-gray-200 cursor-pointer"
                                                                    key={index}
                                                                    onClick={() =>
                                                                        handleOpenFamilyDrawer(
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    <div className="w-max h-max flex items-center gap-4">
                                                                        <img
                                                                            src=""
                                                                            alt="nike"
                                                                        />
                                                                        <p>
                                                                            {
                                                                                item?.name
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="">
                                                                        <GoChevronRight />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <NavLink
                                                                    to={`/collections/${item.slug}`}
                                                                    onClick={
                                                                        closeAllDrawer
                                                                    }
                                                                >
                                                                    <div
                                                                        className="w-full h-16 flex justify-between items-center border-b border-b-gray-200 cursor-pointer"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <div className="w-max h-max flex items-center gap-4">
                                                                            <img
                                                                                src=""
                                                                                alt="nike"
                                                                            />
                                                                            <p>
                                                                                {
                                                                                    item?.name
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </NavLink>
                                                            )
                                                    )}
                                                </div>
                                            </div>
                                        </Drawer>
                                    )}
                                    {selectedFamily && (
                                        <Drawer
                                            open={openFamilyDrawer}
                                            onClose={() =>
                                                setOpenFamilyDrawer(false)
                                            }
                                            placement="right"
                                            maskClosable
                                            closeIcon={false}
                                            className="w-full h-max"
                                            width={menuSize}
                                        >
                                            <div className="w-full h-max">
                                                <div className="w-full h-52  relative ">
                                                    <div className="w-full h-max flex justify-between absolute top-0 left-0 px-4 pt-2">
                                                        <div className="w-max h-max flex items-center gap-4">
                                                            {" "}
                                                            <GoChevronLeft
                                                                size={20}
                                                                className="cursor-pointer"
                                                                onClick={() =>
                                                                    setOpenFamilyDrawer(
                                                                        false
                                                                    )
                                                                }
                                                            />
                                                            <p>Our products</p>
                                                        </div>
                                                        <p
                                                            className="text-lg cursor-pointer"
                                                            onClick={
                                                                closeAllDrawer
                                                            }
                                                        >
                                                            X
                                                        </p>
                                                    </div>
                                                    <img
                                                        src={sneakerImg}
                                                        className="w-full h-full object-cover"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="w-full h-max">
                                                    <div className="w-full h-max flex items-center justify-between p-3">
                                                        <p className="text-lg">
                                                            {
                                                                selectedFamily?.name
                                                            }
                                                        </p>
                                                        <NavLink
                                                            to={`/collections/${selectedFamily?.slug}`}
                                                            onClick={
                                                                closeAllDrawer
                                                            }
                                                        >
                                                            <p className="underline text-xs">
                                                                View all
                                                            </p>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                                <div className="w-full h-max flex flex-col px-4">
                                                    {selectedFamily?.family?.map(
                                                        (item, index) => (
                                                            <div className="w-full h-max flex flex-col">
                                                                <NavLink
                                                                    to={`/collections/${item?.slug}`}
                                                                    onClick={
                                                                        closeAllDrawer
                                                                    }
                                                                >
                                                                    <div
                                                                        className="w-full h-10 flex gap-4 items-center cursor-pointer text-xs"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <div className="w-max h-max flex items-center gap-4">
                                                                            <img
                                                                                src=""
                                                                                alt="nikee"
                                                                            />
                                                                        </div>
                                                                        <p className="font-semibold text-gray-600">
                                                                            {
                                                                                item?.name
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    {item?.types ? (
                                                                        <div className="w-full h-max flex flex-col px-2 text-gray-500 text-xs">
                                                                            {item?.types?.map(
                                                                                (
                                                                                    item,
                                                                                    index
                                                                                ) => (
                                                                                    <NavLink
                                                                                        to={`/collections/${item?.slug}`}
                                                                                    >
                                                                                        <div
                                                                                            className="w-full h-10 flex items-center"
                                                                                            key={
                                                                                                index
                                                                                            }
                                                                                        >
                                                                                            <p>
                                                                                                {
                                                                                                    item?.name
                                                                                                }
                                                                                            </p>
                                                                                        </div>
                                                                                    </NavLink>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    ) : null}
                                                                </NavLink>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </Drawer>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </Drawer>
        </>
    );
};

export default Header;
