import React from "react";
import shopDoll from "../assets/public/shopdoll.jpg";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full">
                <img
                    src={shopDoll}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-[60%] h-full flex items-center flex-col gap-4 justify-center px-60">
                <p className="text-3xl font-semibold">Login</p>
                <div className="w-full h-max flex flex-col gap-5 mt-10">
                    <input
                        type="text"
                        className="w-full h-10 rounded border-2 border-gray-200 outline-none text-sm pl-2"
                        placeholder="Input email address"
                    />
                    <div className="w-full h-max flex justify-between items-center gap-2 rounded border-2 border-gray-200 px-2 ">
                        <input
                            type="password"
                            className="w-[90%] h-10 outline-none text-sm "
                            placeholder="Input password"
                        />
                        <FaEye size={20} className="cursor-pointer" />
                        <FaEyeSlash className="hidden" />
                    </div>
                    <button className="text-sm font-semibold bg-indigo-500 h-12 rounded text-white cursor-pointer">
                        LOGIN
                    </button>
                    <p className="w-full h-max flex in-checked: justify-between">
                        Forget password? click here{" "}
                        <NavLink to={"/signup"} className="">
                            Sign Up
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
