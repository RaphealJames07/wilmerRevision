import {toast} from 'react-toastify'

const Verify = () => {
    return (
        <div className="w-full h-screen verifyBgImg flex items-center justify-center">
            <div className="bg-white opacity-90  rounded w-[40%] h-[40%] flex items-center justify-center flex-col gap-4 text-black">
                <p className="text-3xl font-semibold">
                    Verify your account here
                </p>
                <input
                    type="text"
                    className="w-40 h-10 rounded border-2 text-center"
                />
                <button className="w-max h-max flex bg-purple-500 text-white font-semibold px-12 py-2 rounded cursor-pointer">
                    VERIFY
                </button>
                <p onClick={()=>toast.loading("Resending...")}>Resend Verification code?</p>
            </div>
        </div>
    );
};

export default Verify;
