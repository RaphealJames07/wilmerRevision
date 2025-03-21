import React from "react";
import {NavLink} from "react-router-dom";
import {IoCartOutline} from "react-icons/io5";
import {CiHeart, CiUser} from "react-icons/ci";

const Header = () => {
    return (
        <div className="w-full h-20 flex justify-between items-center px-20 shadow-xl">
            <p>Logo</p>
            <div className="w-max h-max flex gap-8">
                <NavLink className={"cursor-pointer"} to={"/"}>
                    Home
                </NavLink>
                <NavLink className={"cursor-pointer"} to={"/shop"}>
                    Shop
                </NavLink>
                <NavLink className={"cursor-pointer"} to={"/collections"}>
                    Collections
                </NavLink>
                <NavLink className={"cursor-pointer"} to={"/about"}>
                    About
                </NavLink>
            </div>
            <div className="w-max h-max flex items-center gap-8">
                <span className="w-max h-max relative">
                    <span className="absolute -top-4 -right-2 text-lg">1</span>
                    <IoCartOutline size={24} className="cursor-pointer" />
                </span>
                <CiUser size={24} className="cursor-pointer" />
                <CiHeart size={24} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Header;
