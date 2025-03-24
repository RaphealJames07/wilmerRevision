import {useState} from "react";
import paySuccess from "../../assets/paySuccess.gif";
import failedImg from "../../assets/failedpay.gif";
import loadingSpinner from "../../assets/tube-spinner.svg";

const PaymentVerify = () => {
    const [status, setStatus] = useState(0);
    console.log(setStatus)
    return (
        <>
            <div className="w-full h-max pt-20 flex items-center justify-center flex-col">
                {status === 0 ? (
                    <>
                        <p className=" text-3xl font-semibold">
                            Verifying payment
                        </p>
                        <img src={loadingSpinner} alt="" className="w-80 h-80" />
                        <p>Please wait while we verify your payment...</p>
                    </>
                ) : status === 1 ? (
                    <>
                        <p className="text-[#008081] text-3xl font-semibold">
                            Payment Successful
                        </p>
                        <img src={paySuccess} alt="" className="w-80 h-80" />
                        <p>Dear Customer, your payment is successful </p>
                        <p className="text-center w-[90%]">
                            Your Order has been Processed with order No:
                            12345678
                        </p>
                        <p className="text-center w-[90%]">
                            You can check your order status below
                        </p>
                        <div className="w-max h-max flex items-center justify-center gap-5 mt-10">
                            <button className="w-max h-max px-5 py-2 rounded border-[#008081] border-2 ">
                                View Order
                            </button>
                            <button className="w-max h-max px-5 py-2 rounded bg-[#008081] text-white">
                                Back To Home
                            </button>
                        </div>
                    </>
                ) : status === 2 ? (
                    <>
                        <p className="text-red-600 text-3xl font-semibold">
                            Payment Failed
                        </p>
                        <img src={failedImg} alt="" className="w-80 h-80" />
                        <p>Dear Customer, your payment verification failed</p>
                        <p className="text-center w-[90%]">
                            Please check with your bank and try again later.
                        </p>

                        <div className="w-max h-max flex items-center justify-center gap-5 mt-10">
                            <button className="w-max h-max px-5 py-2 rounded bg-[#008081] text-white">
                                Back To Home
                            </button>
                        </div>
                    </>
                ) : (
                    "Unknown Error"
                )}
            </div>
        </>
    );
};

export default PaymentVerify;
