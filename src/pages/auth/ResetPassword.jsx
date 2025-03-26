import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {toast} from "react-toastify";
import {useState} from "react";
import {useNavigate, useParams} from "react-router";
// import { useNavigate } from "react-router";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {token} = useParams();
    console.log(token);
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!password && !confirmPassword)
            return toast.error("You dey craze!!! you no go put password?");
        try {
            setLoading(true);
            const response = await axios.patch(
                `${BASE_URL}/api/v1/users/resetPassword/${token}`,
                {password, confirmPassword}
            );
            console.log(response);
            if (response?.status === 200) setLoading(false);
            toast.success(`Successfull`);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            return;
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);
            console.log(error);
            return;
        }
    };
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
                <p className="text-2xl">
                    If you like forget this one again, no sha disturb me again
                </p>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    className="w-72 h-10 rounded outline-none border-gray-200 border pl-2 text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    className="w-72 h-10 rounded outline-none border-gray-200 border pl-2 text-sm"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                    onClick={handleResetPassword}
                    className="bg-purple-600 cursor-pointer text-white p-2 rounded px-4 disabled:cursor-not-allowed disabled:bg-purple-200"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "SEND"}
                </button>
            </div>
        </>
    );
};

export default ResetPassword;
