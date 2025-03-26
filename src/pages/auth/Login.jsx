import React, {useEffect, useReducer, useState} from "react";
import shopDoll from "../../assets/public/dolltwo.jpg";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {loginToken, userData} from "../../global/features";

const Login = () => {
    const initialState = {
        data: {
            email: "benjamed1@mailinator.com",
            password: "Password1$",
        },
        error: {
            type: "",
            message: "",
            isError: false,
        },
        loading: false,
        passwordState: "password",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "setEmail":
                return {
                    ...state,
                    data: {...state.data, email: action.payload},
                };
            case "setPassword":
                return {
                    ...state,
                    data: {...state.data, password: action.payload},
                };
            case "setLoading":
                return {
                    ...state,
                    loading: action.payload,
                };
            case "revealPassword":
                return {
                    ...state,
                    passwordState: action.payload,
                };
            default:
                return state;
        }
    };

    const [currentState, dispatch] = useReducer(reducer, initialState);
    const [isResend, setIsResend] = useState(false);
    const reduxDispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!checkInputs()) {
            toast.error("Fill all inputs");
        } else {
            dispatch({type: "setLoading", payload: true});
            try {
                const response = await axios.post(
                    `${BASE_URL}/api/v1/users/login`,
                    currentState.data
                );
                console.log(response);
                if (response?.status === 200)
                    toast.success(`Login successfull`);
                dispatch({type: "setLoading", payload: false});
                reduxDispatch(loginToken(response?.data?.token));
                reduxDispatch(userData(response?.data?.data));
                setTimeout(() => {
                    navigate("/");
                }, 2000);
                return;
            } catch (error) {
                if (
                    error?.response?.data?.message ===
                    "User not verified, Check for token or use the resend verification"
                ) {
                    setIsResend(true);
                }
                toast.error(error?.response?.data?.message);
                console.log(error);
                dispatch({type: "setLoading", payload: false});
                return;
            }
        }
    };

    const handleResendVerify = async () => {
        if (!currentState.data.email)
            return toast.error("Enter email in the field above");
        else {
            const loadingId = toast.loading("Requesting...");
            try {
                const response = await axios.post(
                    `${BASE_URL}/api/v1/users/resendVerification`,
                    {email: currentState.data.email}
                );
                toast.dismiss(loadingId);
                console.log(response);
                toast.info(response?.data?.message);
                return;
            } catch (error) {
                toast.dismiss(loadingId);
                toast.info(error?.response?.data?.message);
                console.log(error);
                return;
            }
        }
    };

    const checkInputs = () => {
        if (currentState.data.email && currentState.data.password) {
            return true;
        }
        return false;
    };
    useEffect(() => {
        checkInputs();
    }, []);

    console.log(checkInputs());

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
                        type="email"
                        value={currentState.email}
                        onChange={(e) =>
                            dispatch({
                                type: "setEmail",
                                payload: e.target.value,
                            })
                        }
                        className="w-full h-10 rounded border-2 border-gray-200 outline-none text-sm pl-2"
                        placeholder="Input email address"
                    />
                    <div className="w-full h-max flex justify-between items-center gap-2 rounded border-2 border-gray-200 px-2 ">
                        <input
                            value={currentState.password}
                            onChange={(e) =>
                                dispatch({
                                    type: "setPassword",
                                    payload: e.target.value,
                                })
                            }
                            type={currentState.passwordState}
                            className="w-[90%] h-10 outline-none text-sm "
                            placeholder="Input password"
                        />
                        {currentState.passwordState === "password" ? (
                            <FaEye
                                size={20}
                                className="cursor-pointer"
                                onClick={() =>
                                    dispatch({
                                        type: "revealPassword",
                                        payload: "text",
                                    })
                                }
                            />
                        ) : (
                            <FaEyeSlash
                                className="cursor-pointer"
                                size={20}
                                onClick={() =>
                                    dispatch({
                                        type: "revealPassword",
                                        payload: "password",
                                    })
                                }
                            />
                        )}
                    </div>

                    <button
                        className="text-sm font-semibold bg-indigo-500 h-12 rounded text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-indigo-200"
                        disabled={currentState.loading}
                        onClick={handleSignup}
                    >
                        {currentState.loading ? "LOADING..." : " LOGIN"}
                    </button>
                    <p className="w-full h-max flex in-checked: justify-between">
                        <span>
                            Forget password? click here{" "}
                            <NavLink to={"/forget-password"}>reset</NavLink>
                        </span>
                        <NavLink to={"/register"} className="">
                            Sign Up
                        </NavLink>
                    </p>
                    {isResend && (
                        <p>
                            Do you wish to get verification link? click{" "}
                            <span
                                onClick={handleResendVerify}
                                className="text-2xl px-2 text-blue-500 cursor-pointer"
                            >
                                here
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
