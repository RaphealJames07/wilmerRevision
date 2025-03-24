import {useEffect, useState} from "react";
import {CiEdit} from "react-icons/ci";

const MyInfo = () => {
    const userData = {
        firstName: "John Doe",
        lastName: "skjdnj",
        email: "cdjmd",
        phone_number: "Loading...",
        description: "Loading...",
        address: "Loading...",
    };

    const [state, setState] = useState({
        edit_mode: false,
        firstName: "Loading...",
        lastName: "lodnb",
        email: "Loading...",
        phone_number: "Loading...",
        description: "Loading...",
        address: "Loading...",
    });

    useEffect(() => {
        if (!state.edit_mode && userData) {
            setState({
                ...state,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phone_number: userData.phone_number,
                description: userData.description,
                address: userData.address,
            });
        }
    }, [userData]);

    const toggleEditMode = () => {
        setState((prevState) => ({
            ...prevState,
            edit_mode: !prevState.edit_mode,
        }));
    };

    const updateInfoData = {
        firstName: state.firstName,
        lastName: state.lastName,
        description: state.description,
        phoneNumber: state.phone_number,
        email: state.email,
        address: state.address,
    };

    const handleSaveEdits = async () => {
        alert("Saved");
        console.log(updateInfoData);
    };

    const handleInputChange = (e, field) => {
        setState({...state, [field]: e.target.value});
    };

    const handleCancelBtn = () => {
        setState((prevState) => ({
            ...prevState,
            edit_mode: false,
        }));
    };

    return (
        <div className="w-full h-max flex flex-col gap-4 pl-8 phone:pl-0 ">
            <div className="w-full h-max flex flex-col items-center gap-3 ">
                <div className="w-32 h-32 bg-sky-100 rounded-full relative">
                    <img
                        src={"profilePic"}
                        alt=""
                        className="w-full h-full rounded-full"
                    />
                    <span className="absolute top-0 right-2 w-12 h-12 rounded-full flex items-center justify-center bg-[#118686] cursor-pointer">
                        <CiEdit className="text-2xl text-white" />
                    </span>
                </div>
                <div className="w-full h-max flex items-center justify-center text-2xl font-medium">
                    Welcome,&nbsp;<span>Rapheal James</span>
                </div>
            </div>
            <div className="w-full h-max flex flex-col gap-4">
                <div className="w-full h-max flex justify-between gap-8 phone:flex-col phone:gap-2 ">
                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-1">
                        <p className="text-sm text-primary-gray ">
                            Business Name
                        </p>
                        <input
                            type="text"
                            className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed  disabled:bg-gray-100"
                            value={state.firstName}
                            disabled={!state.edit_mode}
                            onChange={(e) => handleInputChange(e, "firstName")}
                        />
                    </div>
                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-1">
                        <p className="text-sm text-primary-gray ">
                            Email Address
                        </p>
                        <input
                            type="text"
                            value={state.email}
                            disabled={!state.edit_mode}
                            onChange={(e) => handleInputChange(e, "email")}
                            className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed disabled:bg-gray-100"
                        />
                    </div>
                </div>
                <div className="w-full h-max flex justify-between gap-8 phone:flex-col phone:gap-2">
                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-1">
                        <p className="text-sm text-primary-gray ">
                            Mobile Number
                        </p>
                        <input
                            type="text"
                            value={state.phone_number}
                            disabled={!state.edit_mode}
                            onChange={(e) =>
                                handleInputChange(e, "phone_number")
                            }
                            className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed disabled:bg-gray-100"
                        />
                    </div>
                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-1">
                        <p className="text-sm text-primary-gray ">
                            Other Mobile Number
                        </p>
                        <input
                            type="text"
                            value={state.phone_number}
                            disabled={!state.edit_mode}
                            onChange={(e) =>
                                handleInputChange(e, "phone_number")
                            }
                            className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed disabled:bg-gray-100"
                        />
                    </div>
                </div>
                <div className="w-full h-max flex justify-between gap-8 phone:flex-col phone:gap-2">
                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-1">
                        <p className="text-sm text-primary-gray ">Address</p>
                        <input
                            type="text"
                            value={state.address}
                            disabled={!state.edit_mode}
                            onChange={(e) => handleInputChange(e, "address")}
                            className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed disabled:bg-gray-100"
                        />
                    </div>
                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-1 ">
                        <p className="text-sm text-primary-gray ">Address 2</p>
                        <input
                            type="text"
                            value={state.address}
                            disabled={!state.edit_mode}
                            onChange={(e) => handleInputChange(e, "address")}
                            className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed disabled:bg-gray-100"
                        />
                    </div>
                </div>
                <div className="w-full h-max flex justify-between gap-8 phone:flex-col phone:gap-2">
                    <div className="w-full phone:w-full h-max flex flex-col gap-1">
                        <p className="text-sm text-primary-gray ">
                            Description
                        </p>
                        <textarea
                            className="w-full h-max rounded border border-gray-400 outline-none p-4 disabled:cursor-not-allowed disabled:bg-gray-100 text-primary-gray"
                            placeholder="Dealer in electric materials"
                            value={state.description}
                            disabled={!state.edit_mode}
                            onChange={(e) =>
                                handleInputChange(e, "description")
                            }
                        />
                    </div>
                </div>
                <div className="w-full h-max flex gap-8 mt-4">
                    <button
                        className="w-32 h-12 border-[#0A503D] text-[#0A503D] text-sm font-medium border-x-2 border-y-2 rounded"
                        onClick={handleCancelBtn}
                    >
                        Cancel
                    </button>
                    {state.edit_mode ? (
                        <button
                            className="w-32 h-12 bg-[#0A503D] text-white text-sm font-medium rounded disabled:cursor-not-allowed disabled:"
                            onClick={handleSaveEdits}
                        >
                            Save Changes
                        </button>
                    ) : (
                        <button
                            className="w-32 h-12 bg-[#000] text-white text-sm font-medium rounded"
                            onClick={toggleEditMode}
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyInfo;
