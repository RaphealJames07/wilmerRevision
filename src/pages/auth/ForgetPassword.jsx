import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {toast} from "react-toastify";
import {useState} from "react";
// import { useNavigate } from "react-router";

const ForgetPassword = () => {
    // const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const handleResendPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/users/forgetPassword`,
                {email}
            );
            console.log(response);
            if (response?.status === 200) toast.success(`${response?.data?.message} ${email}`);
            return;
        } catch (error) {
            toast.error(error?.response?.data?.message);
            console.log(error);
            return;
        }
    };
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
                <p className="text-2xl">
                    Did you forget your password? wetin dey worry you sef
                </p>
                <p>Oya enter your email make we run you another one sharpaly</p>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    className="w-72 h-10 rounded outline-none border-gray-200 border pl-2 text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    onClick={handleResendPassword}
                    className="bg-purple-600 text-white p-2 rounded px-4"
                >
                    SEND
                </button>
            </div>
        </>
    );
};

export default ForgetPassword;
