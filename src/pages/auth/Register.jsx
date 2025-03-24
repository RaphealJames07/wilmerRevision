import React, {useEffect, useReducer} from "react";
import shopDoll from "../../assets/public/dolltwo.jpg";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {toast} from "react-toastify";

const Register = () => {
    const initialState = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
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
            case "setFirstName":
                return {
                    ...state,
                    data: {...state.data, firstName: action.payload},
                };
            case "setLastName":
                return {
                    ...state,
                    data: {...state.data, lastName: action.payload},
                };
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
            case "setConfirmPassword":
                return {
                    ...state,
                    data: {...state.data, confirmPassword: action.payload},
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

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!checkInputs()) {
            toast.error("Fill all inputs");
        } else {
            dispatch({type: "setLoading", payload: true});
            try {
                const response = await axios.post(
                    `${BASE_URL}/api/v1/users/signup`,
                    currentState.data
                );
                console.log(response);
                if (response?.status === 201)
                    toast.success(response?.data?.message);
                dispatch({type: "setLoading", payload: false});
                return;
            } catch (error) {
                toast.error(error?.response?.data?.message);
                console.log(error);
                dispatch({type: "setLoading", payload: false});
                return;
            }
        }
    };

    const checkInputs = () => {
        if (
            currentState.data.firstName &&
            currentState.data.lastName &&
            currentState.data.email &&
            currentState.data.password &&
            currentState.data.confirmPassword
        ) {
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
                <p className="text-3xl font-semibold">Sign Up</p>
                <div className="w-full h-max flex flex-col gap-5 mt-10">
                    <div className="w-full h-max flex gap-5 justify-between">
                        <input
                            type="text"
                            className="w-full h-10 rounded border-2 border-gray-200 outline-none text-sm pl-2"
                            value={currentState.firstName}
                            onChange={(e) =>
                                dispatch({
                                    type: "setFirstName",
                                    payload: e.target.value,
                                })
                            }
                            placeholder="Input first name"
                        />
                        <input
                            type="text"
                            value={currentState.lastName}
                            onChange={(e) =>
                                dispatch({
                                    type: "setLastName",
                                    payload: e.target.value,
                                })
                            }
                            className="w-full h-10 rounded border-2 border-gray-200 outline-none text-sm pl-2"
                            placeholder="Input last name"
                        />
                    </div>
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
                    <div className="w-full h-max flex justify-between items-center gap-2 rounded border-2 border-gray-200 px-2 ">
                        <input
                            value={currentState.confirmPassword}
                            onChange={(e) =>
                                dispatch({
                                    type: "setConfirmPassword",
                                    payload: e.target.value,
                                })
                            }
                            type={currentState.passwordState}
                            className="w-[90%] h-10 outline-none text-sm "
                            placeholder="Confirm your password"
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
                        {currentState.loading ? "LOADING..." : " SIGN UP"}
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

export default Register;
