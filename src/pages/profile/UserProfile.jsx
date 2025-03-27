import {useEffect, useState} from "react";
import {CiEdit} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL} from "../../constants/constants";
import {toast} from "react-toastify";
import axios from "axios";
import {loginToken, saveUserData} from "../../global/features";
import {Input, Modal} from "antd";

const UserProfile = () => {
    const token = useSelector((state) => state.userToken);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    console.log(user);
    console.log(token);

    const userData = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        role: user?.role,
    };

    const [state, setState] = useState({
        edit_mode: false,
        firstName: "Loading...",
        lastName: "lodnb",
        email: "Loading...",
        role: "Loading...",
    });

    useEffect(() => {
        if (!state.edit_mode && userData) {
            setState({
                ...state,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                role: userData.role,
            });
        }
    }, []);

    const toggleEditMode = () => {
        setState((prevState) => ({
            ...prevState,
            edit_mode: !prevState.edit_mode,
        }));
    };

    const updateInfoData = {
        firstName: state.firstName,
        lastName: state.lastName,
        role: state.role,
        email: state.email,
    };

    console.log(updateInfoData);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const handleSaveEdits = async () => {
        if (!updateInfoData.firstName && !updateInfoData.lastName)
            return toast.error("Invalid inputs");
        try {
            axios.patch();
            const response = await axios.patch(
                `${BASE_URL}/api/v1/users/updateUser`,
                updateInfoData,
                {headers}
            );
            if (response.status === 200) {
                dispatch(saveUserData(response?.data?.data));
                toast.success("Updated Successfully");
                toggleEditMode();
            }
            return;
            // console.log(response)
        } catch (error) {
            console.log(error);
        }
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

    const [updatePwdData, setUpdatePwdData] = useState({
        password: "",
        confirmPassword: "",
        currentPassword: "",
    });
    const [openModal, setOpenModal] = useState(false);

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        if (
            !updatePwdData.confirmPassword &&
            !updatePwdData.password &&
            !updatePwdData.currentPassword
        )
            return toast.error("Fill in all details");
        const loadingId = toast.loading("Updating...");
        try {
            const response = await axios.patch(
                `${BASE_URL}/api/v1/users/updatePassword`,
                updatePwdData,
                {headers}
            );
            toast.dismiss(loadingId);
            if (response.status === 200) {
                dispatch(saveUserData(response?.data?.data));
                dispatch(loginToken(response?.data?.token));
                toast.success("Password Updated Successfully");
                setOpenModal(false);
            }
            return;
            // console.log(response)
        } catch (error) {
            toast.dismiss(loadingId);
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <>
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
                        Welcome,&nbsp;
                        <span>{`${userData?.firstName} ${userData?.lastName}`}</span>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col gap-4">
                    <div className="w-full h-max flex justify-between gap-8 phone:flex-col phone:gap-2 ">
                        <div className="w-1/2 phone:w-full h-max flex flex-col gap-1">
                            <p className="text-sm text-primary-gray ">
                                First Name
                            </p>
                            <input
                                type="text"
                                className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed  disabled:bg-gray-100"
                                value={state.firstName}
                                disabled={!state.edit_mode}
                                onChange={(e) =>
                                    handleInputChange(e, "firstName")
                                }
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
                                Last Name
                            </p>
                            <input
                                type="text"
                                value={state.lastName}
                                disabled={!state.edit_mode}
                                onChange={(e) =>
                                    handleInputChange(e, "lastName")
                                }
                                className="w-full h-12 rounded border border-gray-400 outline-none pl-2 font-normal text-primary-gray disabled:cursor-not-allowed disabled:bg-gray-100"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full h-max flex flex-col gap-1">
                            <p className="text-sm text-primary-gray ">Role</p>
                            <input
                                type="text"
                                value={state.role}
                                disabled={!state.edit_mode}
                                onChange={(e) => handleInputChange(e, "role")}
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
                        <button
                            className="w-32 h-12 bg-[#000] text-white text-sm font-medium rounded"
                            onClick={() => setOpenModal(true)}
                        >
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(!openModal)}
                onCancel={() => setOpenModal(!openModal)}
                onOk={handleUpdatePassword}
                maskClosable
                closeIcon={false}
            >
                <div className="w-full h-max flex flex-col gap-4 items-center justify-center">
                    <Input
                        placeholder="Enter your current password"
                        value={updatePwdData.currentPassword}
                        onChange={(e) =>
                            setUpdatePwdData((prev) => ({
                                ...prev,
                                currentPassword: e.target.value,
                            }))
                        }
                    />
                    <Input
                        placeholder="Enter your new password"
                        value={updatePwdData.password}
                        onChange={(e) =>
                            setUpdatePwdData((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                    />
                    <Input
                        placeholder="Confirm your new password"
                        value={updatePwdData.confirmPassword}
                        onChange={(e) =>
                            setUpdatePwdData((prev) => ({
                                ...prev,
                                confirmPassword: e.target.value,
                            }))
                        }
                    />
                </div>
            </Modal>
        </>
    );
};

export default UserProfile;
