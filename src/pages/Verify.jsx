import {useNavigate, useParams} from "react-router";
import {BASE_URL} from "../constants/constants";
import axios from "axios";
import {useEffect, useState} from "react";
const Verify = () => {
    const navigate = useNavigate();
    const {token} = useParams();
    // const [verifyStatus, setVerifyStatus] = useState(true);
    const [message, setMessage] = useState("Verifying....");
    const handleVerify = async () => {
        // setVerifyStatus(true);
        try {
            const response = await axios.get(
                `${BASE_URL}/api/v1/users/verify/${token}`
            );
            if (response?.data.status === "success") {
                setMessage(response?.data?.message);
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            } else {
                setMessage(response?.data?.message);
            }
            console.log(response);
        } catch (error) {
            console.log(error);
            setMessage(error?.response?.data?.message);
        }
    };

    useEffect(() => {
        if (token) handleVerify();
    }, [token]);

    return (
        <div className="w-full h-screen bg-sky-100 flex items-center justify-center">
            {message}
        </div>
    );
};

export default Verify;
